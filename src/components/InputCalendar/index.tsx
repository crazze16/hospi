import React from "react";

import { useTranslation } from "react-i18next";

import { Label } from "../generic";
import { FlexBox, StyledBlock } from "../containers";
import Modal from "../Modal";
import Calendar, { ICalendar } from "../Calendar";
import { MONTHS } from "../../utils/constants";
import { IcoCalendar, IcoEdit, LabelEdit } from "./styles";
import { IInputData } from "../../interfaces/intarfaces";
import {
  ContainerSelectedValue,
  ItemsMultiSelect,
} from "../MultiSelect/styles";

const SelectDateRange: React.FC<ICalendar> = ({
  value,
  endInterval,
  ...props
}) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = React.useState(0);

  const createLine = (): string => {
    if (value === undefined) return "Choose date";
    if (endInterval === undefined) return "Enter your start and enddate";
    return `${value.getDate()} ${t(
      `calendar.months.${MONTHS[value.getMonth()]}`
    ).toLocaleLowerCase()} ${
      value.getFullYear() !== endInterval.getFullYear()
        ? value.getFullYear()
        : ""
    } - ${endInterval.getDate()} ${t(
      `calendar.months.${MONTHS[endInterval.getMonth()]}`
    ).toLocaleLowerCase()} ${endInterval.getFullYear()}
    `;
  };

  return (
    <FlexBox justify="space-between" margin="0.5em 0">
      <FlexBox justify="flex-start" onClick={() => setShowModal(1)}>
        <IcoCalendar size="1.1em" fontColor={endInterval === undefined} />
        <ItemsMultiSelect>{createLine()}</ItemsMultiSelect>
      </FlexBox>
      {endInterval && (
        <FlexBox justify="flex-end" onClick={() => setShowModal(1)}>
          <LabelEdit colorEdit>Edit Date</LabelEdit>
          <IcoEdit size="1.2em" />
        </FlexBox>
      )}

      <Modal
        isShow={!!showModal}
        handleClose={() => setShowModal(0)}
        children={
          <FlexBox
            justify="center"
            direction="column"
            margin="1em"
            style={{ overflow: "auto" }}
          >
            <Label fontSize="1.5em">Choose date</Label>
            <Calendar value={value} endInterval={endInterval} {...props} />
          </FlexBox>
        }
      />
    </FlexBox>
  );
};

interface IDateRange extends IInputData, ICalendar {
  w?: string;
  grow?: string;
  id?: string;
}

export const DateRange: React.FC<IDateRange> = ({
  title = "",
  placeholder = "",
  prefix = undefined,
  children,
  value,
  endInterval,
  w = "100%",
  grow = "0",
  id,
  ...props
}) => {
  const { t } = useTranslation();

  const [showModal, setShowModal] = React.useState(0);

  const createLine = (): string => {
    if (value === undefined) return placeholder || "Choose date";
    if (!props.range)
      return `${value.getDate()} ${t(
        `calendar.months.${MONTHS[value.getMonth()]}`
      ).toLocaleLowerCase()} ${value.getFullYear()}`;
    if (endInterval === undefined) return placeholder || "Choose date";
    return `${value.getDate()} ${t(
      `calendar.months.${MONTHS[value.getMonth()]}`
    ).toLocaleLowerCase()} ${
      value.getFullYear() !== endInterval.getFullYear()
        ? value.getFullYear()
        : ""
    } - ${endInterval.getDate()} ${t(
      `calendar.months.${MONTHS[endInterval.getMonth()]}`
    ).toLocaleLowerCase()} ${endInterval.getFullYear()}
      `;
  };

  return (
    <StyledBlock w={w} grow={grow} id={id}>
      {title && (
        <Label bgColor="transparent" p="0" fontWeight="600">
          {title}
        </Label>
      )}
      <ContainerSelectedValue onClick={() => setShowModal(1)}>
        <IcoCalendar
          size="1.1em"
          fontColor={
            props.range ? endInterval === undefined : value === undefined
          }
        />
        <ItemsMultiSelect
          bgColor="transparent"
          muted={props.range ? endInterval === undefined : value === undefined}
        >
          {createLine()}
        </ItemsMultiSelect>
      </ContainerSelectedValue>
      {showModal > 0 && (
        <Modal
          isShow={!!showModal}
          handleClose={() => setShowModal(0)}
          children={
            <FlexBox
              justify="center"
              direction="column"
              margin="0.5em"
              style={{ overflow: "auto" }}
            >
              <Label fontSize="1.5em">{title}</Label>
              <Calendar value={value} endInterval={endInterval} {...props} />
            </FlexBox>
          }
        />
      )}
    </StyledBlock>
  );
};

export default SelectDateRange;
