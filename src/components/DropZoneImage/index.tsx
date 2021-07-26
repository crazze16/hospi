import React from "react";
import { useDropzone } from "react-dropzone";

import { Container } from "./styles";
import { ImageAdd } from "components/Icons/ImageAdd";
import { Label } from "components/generic";
import { theme } from "styles/theme";

export interface IDropzone {
  selectedFile: File | undefined;
  setSelectedFile: (x: File) => void;
  hide?: boolean;
}
export const useDropZone = (): Partial<IDropzone> => {
  const [selectedFile, setSelectedFile] = React.useState<File>();
  return {
    selectedFile,
    setSelectedFile,
  };
};

const StyledDropzone: React.FC<Partial<IDropzone>> = ({
  selectedFile,
  setSelectedFile,
  hide = false,
}) => {
  const {
    acceptedFiles,
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({ accept: "image/*" });
  React.useEffect(() => {
    if (acceptedFiles) {
      setSelectedFile && setSelectedFile(acceptedFiles[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [acceptedFiles]);

  return (
    // <div className="container">
    <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
      <input {...getInputProps()} />
      {!hide && (
        <>
          {" "}
          <ImageAdd />
          <p>
            <Label cursor="pointer" fontColor={theme.colors.primary}>
              Upload a file
            </Label>
            <Label cursor="pointer">or drag & drop</Label>
          </p>
          <p>
            {selectedFile?.name ?? (
              <Label cursor="pointer" fontColor={theme.colors.textMuted}>
                PNG or JPG up to 10MB
              </Label>
            )}
          </p>
        </>
      )}
    </Container>
    // </div>
  );
};
export default StyledDropzone;
