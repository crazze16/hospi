import React, { useEffect, useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import { Area, Point } from "react-easy-crop/types";

import StyledDropzone, { IDropzone } from "components/DropZoneImage";
import { IcoEdit, Label } from "components/generic";
import Modal from "components/Modal";
import photo_default from "../../../assets/images/img.jpg";
import { Container, ContainerPhoto } from "./styles";
import Range, { useRange } from "components/Range";
import { getCroppedImg } from "components/ImageCropper/canvasUtils";

function readFile(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

export const PhotoEdit: React.FC<{
  url: string;
  photo: Partial<IDropzone> | undefined;
  readyPhoto: ((x: File | undefined) => void) | undefined;
  id?: string;
}> = ({ url, photo, readyPhoto, id }) => {
  const [showStubImg, setShowStubImg] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null | undefined>(
    null
  );

  const rotate = useRange(0);

  useEffect(() => {
    if (photo?.selectedFile !== undefined) {
      if (photo?.selectedFile?.size < 10_000_000) {
        readFile(photo?.selectedFile).then((data) => {
          setImageSrc(data as string);
          setShowModal(true);
        });
      }
    }
  }, [photo?.selectedFile]);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  useEffect(() => {
    !showModal &&
      getCroppedImg(
        imageSrc as string,
        croppedAreaPixels as Area,
        rotate.value
      ).then((data) => {
        setCroppedImage(data);
      });
    // eslint-disable-next-line
  }, [croppedAreaPixels, showModal]);

  useEffect(() => {
    if (croppedImage && photo?.selectedFile) {
      fetch(croppedImage)
        .then((res) => res.blob())
        .then((blob) => {
          const file = new File([blob], photo?.selectedFile!.name, {
            type: photo?.selectedFile!.type,
          });
          readyPhoto && readyPhoto(file);
        });
    }
    // eslint-disable-next-line
  }, [croppedImage]);

  return (
    <ContainerPhoto id={id}>
      <Container>
        <picture>
          {croppedImage ? (
            <img src={croppedImage} alt="" />
          ) : photo?.selectedFile ? (
            <img src={URL.createObjectURL(photo?.selectedFile)} alt="" />
          ) : !showStubImg ? (
            <img
              src={url}
              alt=""
              onError={() => {
                setShowStubImg(true);
              }}
              onLoad={() => {
                setShowStubImg(false);
              }}
            />
          ) : (
            <img src={photo_default} alt="" />
          )}
        </picture>
        {photo && <StyledDropzone {...photo} hide={true} />}
        <Label fontColor="white" fontSize="20px">
          <IcoEdit size="1.1em" color="white" />
          {` Edit`}
        </Label>
      </Container>
      {showModal && (
        <Modal isShow={showModal} handleClose={() => setShowModal(false)}>
          {imageSrc && (
            <>
              <div
                style={{
                  width: "400px",
                  height: "400px",
                  margin: "8px",
                  display: "relative",
                }}
              >
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  rotation={rotate.value}
                  zoom={zoom}
                  aspect={1}
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                  cropShape="round"
                  showGrid={false}
                  zoomSpeed={0.2}
                />
              </div>
              <Range {...rotate} min={-180} max={180} p="0 0 24px 0" />
            </>
          )}
        </Modal>
      )}
    </ContainerPhoto>
  );
};
