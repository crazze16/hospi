 import { IcoClock, IcoDone, IcoWarning, Label } from "components/generic";
import { useContextHospi } from "context/ContextHospi";
import React from "react";
import { theme } from "styles/theme";
import { NotVerification } from "./styles";

export const HostVerify: React.FC = () => {
  const { userProfile } = useContextHospi();
  return (
    <NotVerification state={userProfile?.verification_status || "unverified"}>
      <Label fontColor="white" bgColor={theme.colors.thirdly}>
        {userProfile?.verification_status === "verified"
          ? "This badge will now be visible to students when they view a room of yours"
          : userProfile?.verification_status === "verifying"
          ? "Hospi Housing will get in contact with you soon , this might take a few days"
          : "Not verified by Hospi Housing"}
      </Label>
      {(userProfile?.verification_status === "unverified" ||
        userProfile?.verification_status === "failed") && (
        <IcoWarning size="1.4em" />
      )}
      {userProfile?.verification_status === "verifying" && (
        <IcoClock size="1.4em" color={theme.colors.thirdly} />
      )}
      {userProfile?.verification_status === "verified" && (
        <IcoDone size="1.4em" color={theme.colors.text} />
      )}
      {userProfile?.verification_status === "verified"
        ? "Verified by Hospi Housing"
        : userProfile?.verification_status === "verifying"
        ? "Processing Hospi Housing verification"
        : "Not verified by Hospi Housing"}
    </NotVerification>
  );
};
