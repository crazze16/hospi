import React, { useState, useRef } from "react";
import { StyledBlock } from "../../components/containers";
import { Label } from "../generic";
import { StrNum, ISelectItems } from "interfaces/intarfaces";
import { ArrowDown } from "components/PopupMenu/styles";
import useOnClickOutside from "utils/hooks/useOnClickOutside";
import {
  StyledPrefix,
  ContainerSelectedValue,
  ItemsMultiSelect,
  PopupSelect,
  ContainerItem,
  Item,
} from "../MultiSelect/styles";

export interface ISelect extends React.HTMLAttributes<HTMLSelectElement> {
  title?: string;
  items?: ISelectItems[];
  placeholder?: string;
  changeItem: (x: StrNum) => void;
  value?: StrNum;
  w?: string;
  grow?: string;
  p?: string;
  id?: string;
}

const Select: React.FC<ISelect> = ({
  title,
  items,
  value,
  placeholder,
  changeItem,
  w = "100%",
  grow = "0",
  p,
  id,
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useOnClickOutside(ref, () => setShow(false));

  const getLabel = () => {
    let label = placeholder;
    const item = items?.filter((item) => item.value === value);
    if (item && item?.length > 0) label = item[0].label;
    return label;
  };
  return (
    <StyledBlock p={p} id={id}>
      {title && (
        <Label p="0" bgColor="transparent" fontWeight="600">
          {title}
        </Label>
      )}
      <StyledBlock
        onClick={() => {
          setShow(!show);
        }}
      >
        <StyledPrefix>
          <ArrowDown size="2em" up={show} />
        </StyledPrefix>
        <ContainerSelectedValue>
          <ItemsMultiSelect bgColor="transparent" muted={!value}>
            {getLabel()}
          </ItemsMultiSelect>
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
                      changeItem(item.value);
                      setShow(false);
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

// export const useSelect = (initial = ""): ISelect => {
//   const [value, setValue] = useState(initial);
//   return {
//     value,
//     onChange: (e: ChangeEvent<HTMLSelectElement>): void =>
//       setValue(e.target.value),
//   };
// };

export default React.memo(Select, (prevProps, nextProps) => {
  if (prevProps.value !== nextProps.value) return false;
  return true;
});
export interface ISelectHook {
  changeItem: React.Dispatch<React.SetStateAction<StrNum | undefined>>;
  value: StrNum | undefined;
}

export const useSelect = (initial?: StrNum | undefined): ISelectHook => {
  const [value, setValue] = useState<StrNum | undefined>(initial);

  return {
    changeItem: setValue,
    value,
  };
};
