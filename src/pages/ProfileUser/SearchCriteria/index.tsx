import React from "react";
import { useTranslation } from "react-i18next";

import { IPropsFC } from "../../../interfaces/intarfaces";

import { IInputHookOut, InputLabel } from "components/Input";
import { ICalendar } from "components/Calendar";
import { DateRange } from "components/InputCalendar";
import Select, { ISelectHook } from "components/Select/Index";
import { Container } from "./styles";

import { getCyties } from "fetch/fetchCountries";
import { useContextHospi } from "../../../context/ContextHospi";

export const SearchCriteria: React.FC<{
  dateInOut: ICalendar;
  budget: IInputHookOut;
  cityResidence: ISelectHook;
}> = ({ dateInOut, budget, cityResidence }) => {
  const { userStatus } = useContextHospi();
  const user = userStatus === "host" ? "host" : "student";
  const { t } = useTranslation(user);

  const titlePholder = (variable: string): IPropsFC => {
    return {
      title: t(`studentProfile.searchCriteria.form.${variable}.title`),
      placeholder: t(
        `studentProfile.searchCriteria.form.${variable}.placeholder`
      ),
      w: "initial",
      grow: "1",
    };
  };

  return (
    <Container>
      <DateRange
        {...dateInOut}
        title={t(`studentProfile.searchCriteria.form.moveInOutDate.title`)}
      />
      <InputLabel
        {...budget}
        prefix="€"
        type="number"
        {...titlePholder("budget")}
      />
      <Select
        {...cityResidence}
        {...titlePholder("city")}
        items={getCyties()}
      />
    </Container>
  );
};
