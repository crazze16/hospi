import React, { useState } from "react";
import { useTranslation } from "react-i18next";
// @ts-ignore
import ReactCountryFlag from "react-country-flag";

import { Label } from "../generic";
import { StyledBlock, FlexBox } from "../containers";
import { ArrowDown } from "components/PopupMenu/styles";
import { StyledPrefix } from "../MultiSelect/styles";
import {
  ContainerSelectedValue,
  ItemLang,
  PopupSelect,
  StyleFlag,
} from "./styles";
import useOnClickOutside from "utils/hooks/useOnClickOutside";

interface ISelectFlag extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  items: string[];
  placeholder?: string;
  p?: string;
}

const SelectLanguage: React.FC<ISelectFlag> = ({
  title,
  items = [],
  placeholder,
  p,
}) => {
  const { t, i18n } = useTranslation();
  const [show, setShow] = useState(false);
  const [select, setSelect] = useState<string>(items[0]);
  const ref = React.useRef(null);
  useOnClickOutside(ref, () => setShow(false));

  const changeLanguage = (flag: string): void => {
    setShow(!show);
    setSelect(flag);
    i18n.changeLanguage(flag.toLocaleLowerCase());
  };

  return (
    <StyledBlock w="3em" style={{ textAlign: "start" }} p={p}>
      {title && <Label bgColor="transparent">{title}</Label>}
      <StyledBlock onClick={() => setShow(!show)}>
        <StyledPrefix>
          <ArrowDown size="1em" />
        </StyledPrefix>
        <ContainerSelectedValue>
          {select.length === 0 ? (
            "Choose country ..."
          ) : (
            <ReactCountryFlag
              countryCode={select}
              svg
              style={{
                width: "1.5em",
                height: "1.5em",
              }}
            />
          )}
        </ContainerSelectedValue>
      </StyledBlock>
      {show && (
        <PopupSelect className={show ? "panel active" : "panel"} ref={ref}>
          <FlexBox direction="column" align="flex-start">
            {items &&
              items?.map((item) => (
                <ItemLang
                  onClick={() => changeLanguage(item)}
                  className={item === select ? "active" : ""}
                  key={item}
                >
                  <ReactCountryFlag
                    countryCode={item}
                    svg
                    style={StyleFlag}
                    key={item}
                  />
                  {t(`languages.${item === "GB" ? "EN" : item}`)}
                </ItemLang>
              ))}
          </FlexBox>
        </PopupSelect>
      )}
    </StyledBlock>
  );
};

export default SelectLanguage;
