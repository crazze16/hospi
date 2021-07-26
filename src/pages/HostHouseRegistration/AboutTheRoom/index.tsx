import React from "react";
import { useTranslation } from "react-i18next";

import { Checkbox } from "components/CheckRadiobox";
import { TitleH2, TitleH3 } from "components/generic";
import { IInputHookOut, InputLabel } from "components/Input";
import { TMode } from "interfaces/intarfaces";
import { AboutTheRoomWrapper } from "./styles";
import { StyledBlock } from "components/containers";
import TextArea, { ITextArea } from "components/TextArea";
import StyledDropzone, { IDropzone } from "components/DropZoneImage";

interface IRoomsDetails {
  modeView: TMode;
  bedroomSize: IInputHookOut;
  houseSize: IInputHookOut;
  forSharedUse: (items: string[]) => void;
  forPrivateUse: (items: string[]) => void;
  descriptionAboutRoom: Partial<ITextArea>;
  picturesRoom: Partial<IDropzone>;
}
export const AboutTheRoom: React.FC<IRoomsDetails> = ({
  modeView,
  bedroomSize,
  houseSize,
  forSharedUse,
  forPrivateUse,
  descriptionAboutRoom,
  picturesRoom,
}) => {
  const { t } = useTranslation("hostrooms");
  const [listSharedUse, setListSharedUse] = React.useState<string[]>([]);
  const [listPrivateUse, setListPrivateUse] = React.useState<string[]>([]);

  const titleID = (keyItem: string) => {
    return {
      title: t(`aboutTheRoom.${keyItem}.title`),
      placeholder: t(`aboutTheRoom.${keyItem}.placeholder`),
      id: keyItem,
    };
  };
  React.useEffect(() => {
    forSharedUse(listSharedUse);
  }, [listSharedUse]);

  React.useEffect(() => {
    forPrivateUse(listPrivateUse);
  }, [listPrivateUse]);

  const selectedItem = (keyItem: "sharedUse" | "privateUse", item: string) => {
    return {
      title: t(`aboutTheRoom.${keyItem}.items.${item}.title`),
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        e.target.checked
          ? keyItem === "sharedUse"
            ? setListSharedUse((prev) => [...prev, item])
            : setListPrivateUse((prev) => [...prev, item])
          : keyItem === "sharedUse"
          ? setListSharedUse((prev) => prev.filter((el) => el !== item))
          : setListPrivateUse((prev) => prev.filter((el) => el !== item));
      },
      checked:
        keyItem === "sharedUse"
          ? listSharedUse.includes(item)
          : listPrivateUse.includes(item),
      p: "0",
    };
  };

  return (
    <AboutTheRoomWrapper>
      <TitleH2 id="titleAboutRoom" m="32px 0 0 0">
        {t("aboutTheRoom.title")}
      </TitleH2>
      <InputLabel {...bedroomSize} {...titleID("bedroomSize")} />
      <InputLabel {...houseSize} {...titleID("houseSize")} />
      <StyledBlock id="sharedUse">
        <TitleH3>{t("aboutTheRoom.sharedUse.title")}</TitleH3>
        <Checkbox {...selectedItem("sharedUse", "toiletShared")} />
      </StyledBlock>
      <StyledBlock id="privateUse">
        <TitleH3>{t("aboutTheRoom.privateUse.title")}</TitleH3>
        <Checkbox {...selectedItem("privateUse", "toiletPrivate")} />
      </StyledBlock>
      <TextArea
        {...descriptionAboutRoom}
        {...titleID("descriptionAboutRoom")}
      />
      {modeView === "create" && (
        <StyledBlock id="picturesRoom">
          <TitleH3>{t("aboutTheRoom.picturesRoom.title")}</TitleH3>
          <StyledDropzone {...picturesRoom} />
        </StyledBlock>
      )}
    </AboutTheRoomWrapper>
  );
};
