// import { IHost } from "interfaces/host";
import { IPerson } from "interfaces/intarfaces";
import { useState, useEffect } from "react";
import { ERROR404, ERRORANY } from "utils/constants";
import { getDataAmplify } from "utils/utilAmplify";

export const useFetchedData = (id: string | undefined) => {
  let cachedData: IPerson | undefined = undefined;
  // let localstorage: any = undefined;
  // try {
  //   if (id === undefined) throw new Error("Empty data");
  //   localstorage = localStorage.getItem(id);
  //   cachedData = JSON.parse(localstorage);
  // } catch (error) {
  //   console.log(error.message);
  // }

  const [data, setData] = useState<IPerson | undefined>(cachedData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError("");

      getDataAmplify(`/api/users/${id}`)
        .then((response) => {
          try {
            if (
              Object.keys(response).includes("response") &&
              response.response.status === 404
            ) {
              setError(ERROR404);
            } else {
              setData(response as IPerson);
              localStorage.setItem(id, JSON.stringify(response));
            }
          } catch (error) {
            setError(ERRORANY);
          }
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
        });
      setLoading(false);
    } else {
      setData(undefined);
    }
  }, [id]);

  return { data, loading, error };
};
