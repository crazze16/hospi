import React, { useState, useRef } from "react";

import { StyledBlock } from "../containers";
import { Label } from "../generic";

import { ISelectItems, StrNum } from "interfaces/intarfaces";
import { ArrowDown } from "components/PopupMenu/styles";
import {
  StyledPrefix,
  ContainerSelectedValue,
  ItemsMultiSelect,
  CloseButton,
  PopupSelect,
  ContainerItem,
  Item,
} from "./styles";
import useOnClickOutside from "utils/hooks/useOnClickOutside";
import { theme } from "styles/theme";

export interface ISelectMulti extends React.HTMLAttributes<HTMLSelectElement> {
  items?: ISelectItems[];
  selected?: ISelectItems[];
  values?: string[];
  title?: string;
  placeholder?: string;
  changeSelected?: (x: StrNum, mode: boolean) => void;
  p?: string;
}

const MultiSelect: React.FC<ISelectMulti> = ({
  items = [],
  selected = [],
  title,
  placeholder,
  changeSelected,
  p,
  ...props
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useOnClickOutside(ref, () => setShow(false));

  return (
    <StyledBlock p={p}>
      {title && (
        <Label p="0" bgColor="transparent" fontWeight="600">
          {title}
        </Label>
      )}
      <StyledBlock onClick={() => setShow(!show)}>
        <StyledPrefix>
          <ArrowDown size="2em" up={show} />
        </StyledPrefix>
        <ContainerSelectedValue>
          {selected.length === 0 ? (
            <ItemsMultiSelect
              bgColor="transparent"
              fontColor={theme.colors.textMuted}
            >
              {placeholder}
            </ItemsMultiSelect>
          ) : (
            selected.map((item) => (
              <ItemsMultiSelect key={item.value}>
                <>
                  {item.label}
                  <CloseButton
                    onClick={(e) => {
                      changeSelected && changeSelected(item.value, false);
                      e.stopPropagation();
                    }}
                  />
                </>
              </ItemsMultiSelect>
            ))
          )}
        </ContainerSelectedValue>
      </StyledBlock>
      {show && (
        <PopupSelect className={show ? "panel active" : "panel"} ref={ref}>
          <ContainerItem>
            {items &&
              items?.map((item) => (
                <p key={item.value}>
                  <Item
                    fontSize="16px"
                    onClick={() => {
                      changeSelected && changeSelected(item.value, true);
                    }}
                  >
                    {item.label}
                  </Item>
                </p>
              ))}
          </ContainerItem>
        </PopupSelect>
      )}
    </StyledBlock>
  );
};

export default MultiSelect;

const separateItems = <T extends { value: StrNum }>(
  items: T[],
  keys: StrNum[],
  excludes?: boolean
): T[] => {
  if (excludes && keys.length === 0) {
    return [];
  } else if (!excludes && keys.length === 0) return items;
  return items.filter((item) =>
    excludes ? keys.includes(item.value) : !keys.includes(item.value)
  );
};

export const useMultiSelect = (
  items: ISelectItems[],
  initial?: StrNum[] | undefined
) => {
  const [selectedItems, setSelectedItems] = useState<ISelectItems[]>(
    separateItems<ISelectItems>(items, initial || [], true)
  );
  const [lines, setLines] = useState<ISelectItems[]>(
    separateItems<ISelectItems>(items, initial || [])
  );

  const changeSelected = (x: StrNum, mode: boolean = true) => {
    if (mode) {
      setSelectedItems((prev) => [
        ...prev,
        ...lines.filter((item) => item.value === x),
      ]);
      setLines((prev) => prev.filter((item) => item.value !== x));
    } else {
      setLines((prev) => [
        ...prev,
        ...selectedItems.filter((item) => item.value === x),
      ]);
      setSelectedItems((prev) => prev.filter((item) => item.value !== x));
    }
  };

  return {
    selected: selectedItems,
    items: lines,
    changeSelected,
    values: selectedItems.map((item) => String(item.value)),
  };
};
