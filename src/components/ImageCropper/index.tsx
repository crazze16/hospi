import { useCallback, useState } from "react";
import { getCroppedImg, getRotatedImage } from "./canvasUtils";
import Cropper from "react-easy-crop";
import { getOrientation } from "get-orientation/browser";
import { Wrapper } from "./imageCropper.styles";
import { Area, Point } from "react-easy-crop/types";
import useLocalStorage from "../../utils/hooks/useLocalStorage";

function readFile(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result), false);
    reader.readAsDataURL(file);
  });
}

// apply rotation if needed
// const ORIENTATION_TO_ANGLE = {
//     '3': 180,
//     '6': 90,
//     '8': -90,
// }

type Event<T = EventTarget> = {
  target: T;
};

export const ImageCropper = (props: any) => {
  const { setIsUploadModuleOpen } = props;

  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [crop, setCrop] = useState<Point>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null);
  const [croppedImage, setCroppedImage] = useState<string | null | undefined>(
    null
  );

  const [userCroppedImageInStore, setUserCroppedImageInStore] = useLocalStorage<
    string | null
  >("croppedImg", null);

  const onCropComplete = useCallback(
    (croppedArea: Area, croppedAreaPixels: Area) => {
      setCroppedAreaPixels(croppedAreaPixels);
    },
    []
  );

  let formData = new FormData();

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc as string,
        croppedAreaPixels as Area,
        rotation
      );
      formData.append("avatar", croppedImage);
      setUserCroppedImageInStore(croppedImage);
      console.log(formData);
      setIsUploadModuleOpen(false);
      // setCroppedImage(croppedImage as string)
    } catch (e) {
      console.error(e);
    }
  }, [imageSrc, croppedAreaPixels, rotation]);

  const onFileChange = async (e: Event<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      if (file.size < 10_000) {
        let imageDataUrl = await readFile(file);

        // apply rotation if needed
        // const orientation = await getOrientation(file)
        // const rotation = ORIENTATION_TO_ANGLE[orientation]
        // if (rotation) {
        //     imageDataUrl = await getRotatedImage(imageDataUrl, rotation)
        // }

        setImageSrc(imageDataUrl as string);
      } else {
        console.log("big size");
        return;
      }
    }
  };

  return (
    <>
      {imageSrc ? (
        <>
          <Wrapper>
            <div>
              <Cropper
                image={imageSrc}
                crop={crop}
                rotation={rotation}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                cropShape="round"
                showGrid={false}
                zoomSpeed={0.2}
              />
            </div>
          </Wrapper>
          <div>
            <button onClick={showCroppedImage}>SAVE</button>
            <input type="file" onChange={onFileChange} accept="image/*" />
            {/*<a href={localStorage.getItem('croppedImg') as string} download='avatar.png'>download image</a>*/}
            <div>
              <input
                type="range"
                min="0"
                max="360"
                onChange={(e) => setRotation(+e.currentTarget.value)}
              />
            </div>
          </div>
        </>
      ) : (
        <div>
          <input type="file" onChange={onFileChange} accept="image/*" />
        </div>
      )}
    </>
  );
};
