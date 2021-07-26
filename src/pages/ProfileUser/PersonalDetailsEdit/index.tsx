import React from "react";
import { useTranslation } from "react-i18next";

import { IPropsFC } from "../../../interfaces/intarfaces";

import { IInputHookOut, InputLabel } from "components/Input";
import { ICalendar } from "components/Calendar";
import { DateRange } from "components/InputCalendar";
import Select, { ISelect, ISelectHook } from "components/Select/Index";
import { ContainerPD } from "./styles";

import { getCountries, getPhoneCodes } from "fetch/fetchCountries";
import { useContextHospi } from "../../../context/ContextHospi";
import { PhotoEdit } from "pages/ProfileUserEdit/PhotoEdit";
import { IDropzone } from "components/DropZoneImage";

export const PersonalDetailsEdit: React.FC<{
  firstName: IInputHookOut;
  lastName: IInputHookOut;
  dateBirth?: ICalendar;
  birthCountry?: ISelect;
  phoneCode: ISelectHook;
  phone: IInputHookOut;
  photo?: string | undefined;
  newPhoto?: Partial<IDropzone>;
  readyPhoto?: (x: File | undefined) => void;
}> = ({
  firstName,
  lastName,
  dateBirth,
  birthCountry,
  phoneCode,
  phone,
  photo,
  newPhoto,
  readyPhoto,
}) => {
  const { userStatus } = useContextHospi();
  const user = userStatus === "host" ? "host" : "student";
  const { t } = useTranslation(user);

  const titlePholder = (part: string, variable: string): IPropsFC => {
    return {
      title: t(`${user}Profile.${part}.form.${variable}.title`),
      placeholder: t(`${user}Profile.${part}.form.${variable}.placeholder`),
      w: "initial",
      grow: "1",
    };
  };

  return (
    <ContainerPD className={`${user}${photo ? " avatar" : ""}`}>
      {photo && (
        <PhotoEdit
          url={photo}
          photo={newPhoto}
          readyPhoto={readyPhoto}
          id="photo"
        />
      )}
      <InputLabel
        {...firstName}
        {...titlePholder("personalDetails", "firstName")}
        id="firstname"
      />
      <InputLabel
        {...lastName}
        {...titlePholder("personalDetails", "lastName")}
        id="lastname"
      />
      {userStatus === "student" && dateBirth && (
        <DateRange
          {...dateBirth}
          {...titlePholder("personalDetails", "birthDate")}
          id="birthdate"
        />
      )}
      {userStatus === "student" && birthCountry && (
        <Select
          {...birthCountry}
          {...titlePholder("personalDetails", "birthCountry")}
          items={getCountries()}
          id="birthcountry"
        />
      )}
      <Select
        {...phoneCode}
        {...titlePholder("personalDetails", "countryCode")}
        items={getPhoneCodes()}
        id="countrycode"
      />
      <InputLabel
        {...phone}
        {...titlePholder("personalDetails", "phone")}
        type="number"
        id="phone"
      />
    </ContainerPD>
  );
};
