import React, { createContext, useContext, useState, useEffect } from "react";
import { RoleUser, IPerson } from "../interfaces/intarfaces";
import { useFetchedData } from "fetch/useFetch";
import { useHistory } from "react-router-dom";
import {
  HOST_PROFILE_ROUTE,
  STUDENT_PROFILE_ROUTE,
  ERROR404,
  STUDENT_PROFILEVIEW_ROUTE,
  HOST_PROFILEVIEW_ROUTE,
} from "utils/constants";
import { Auth } from "aws-amplify";

interface IContextHospi {
  userStatus: RoleUser | undefined;
  setUser: (id: string | undefined) => void;
  getNameUser: string | undefined;
  loading: boolean;
  userProfile: Partial<IPerson> | undefined;
  changeUser: (user: RoleUser) => void;
  updateProfile: (user: Partial<IPerson> | undefined) => void;
}

const ContextHospi = createContext<IContextHospi>({
  userStatus: undefined,
  setUser: (id: string | undefined) => console.log("set user"),
  getNameUser: "unknown",
  loading: false,
  userProfile: undefined,
  changeUser: (user: RoleUser) => console.log("change user"),
  updateProfile: (user: Partial<IPerson> | undefined) =>
    console.log("change profile"),
});

export const useContextHospi = (): IContextHospi => {
  return useContext<IContextHospi>(ContextHospi);
};

export const ContextHospiProvider: React.FC = ({ children }) => {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState<RoleUser | undefined>(
    undefined
  );
  const [currentUserID, setCurrentUserID] = useState<string | undefined>(
    undefined
  );
  const [profileData, setProfileData] = useState<Partial<IPerson> | undefined>(
    undefined
  );

  // GET to SERVER and fetch data Profile user with id = currentUserID
  // Start only when changed state currentUserID
  const { data, loading, error } = useFetchedData(currentUserID);

  // Starting loading from local data
  useEffect(() => {
    Auth.currentAuthenticatedUser().then(({ attributes }) => {
      setCurrentUserID(attributes.sub);
    });
  }, []);

  useEffect(() => {
    if (currentUserID === undefined) {
      setCurrentUser(undefined);
      setProfileData(undefined);
      // history.push(HOME_ROUTE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUserID]);

  useEffect(() => {
    if (!error && data) {
      if (!Object.keys(data).includes("isAxiosError")) setProfileData(data);
      const user_type = data?.user_type ?? "student";
      setCurrentUser(user_type);
      // If profile is complete
      if (data?.is_profile_complete)
        history.push(
          user_type === "student"
            ? STUDENT_PROFILEVIEW_ROUTE
            : HOST_PROFILEVIEW_ROUTE
        );
      // If profile isn't complete
      else
        history.push(
          user_type === "student" ? STUDENT_PROFILE_ROUTE : HOST_PROFILE_ROUTE
        );
    }
    // else {
    //   alert("Problem with Server (500)");
    //   history.push(HOME_ROUTE);
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    // If profile is absent
    if (error === ERROR404) {
      Auth.currentAuthenticatedUser().then(({ attributes }) => {
        let curUserRole = attributes.profile ?? "student";
        setCurrentUser(curUserRole);
        history.push(
          curUserRole === "student" ? STUDENT_PROFILE_ROUTE : HOST_PROFILE_ROUTE
        );
      });
    } else if (error === ERROR404) console.log("SERVER ERROR");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  const getDataUser = <T extends keyof IPerson>(k: T) => {
    return (profileData as IPerson)?.[k] || "Unknown";
  };

  const changeUser = (user: RoleUser) => {
    setCurrentUser(user);
    history.push(
      user === "student" ? STUDENT_PROFILE_ROUTE : HOST_PROFILE_ROUTE
    );
    // Change user in state profileData and localStorage
  };

  return (
    <ContextHospi.Provider
      value={{
        userStatus: currentUser, // for menu and routing: HOST / STUDENT
        setUser: setCurrentUserID, // change user and then loaded his pfofile to profileData
        getNameUser: getDataUser("first_name"),
        loading,
        userProfile: profileData,
        changeUser,
        updateProfile: setProfileData,
      }}
    >
      {children}
    </ContextHospi.Provider>
  );
};
