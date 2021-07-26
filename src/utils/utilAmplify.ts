import Amplify, { Auth, API } from "aws-amplify";
// import S3 from "react-aws-s3";

import { IPerson, UserAttributesKeys } from "interfaces/intarfaces";
import { generateErrorResponse } from "./helpers";

const endPointHospiTest = process.env.REACT_APP_AWS_ENDPOINT;

export const initAmplify = (): void => {
  Amplify.configure({
    Auth: {
      identityPoolId: process.env.REACT_APP_POOL_ID,
      region: process.env.REACT_APP_REGION,
      identityPoolRegion: process.env.REACT_APP_REGION,
      userPoolId: process.env.REACT_APP_USER_POOL_ID,
      userPoolWebClientId: process.env.REACT_APP_WEB_CLIENT_ID,
    },
    // Storage: {
    //   bucket: process.env.REACT_APP_STORAGE_NAME, //REQUIRED -  Amazon S3 bucket name
    //   region: process.env.REACT_APP_REGION, //OPTIONAL -  Amazon service region
    //   identityPoolId: process.env.REACT_APP_POOL_ID,
    // },
    API: {
      endpoints: [
        {
          name: "HospiTest",
          endpoint: endPointHospiTest,
          region: process.env.REACT_APP_REGION,
          // service: "lambda",
        },
      ],
    },
  });
};

const getAutorizationToken = async (): Promise<string> => {
  return (
    (await Auth.currentSession())
      .getIdToken()
      // .getAccessToken()
      .getJwtToken()
  );
};

export const getDataAmplify = async (path: string = "") => {
  const initData: RequestInit = {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        // .getAccessToken()
        .getIdToken()
        .getJwtToken()}`,
    },
  };
  try {
    return await API.get("HospiTest", path, initData);
  } catch (error) {
    return error;
  }
};

export const createProfileAmplify = async (
  path: string = "",
  body: Partial<IPerson>
) => {
  const initData: RequestInit = {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
    body: JSON.parse(JSON.stringify(body)),
  };
  try {
    return await API.post("HospiTest", path, initData);
  } catch (error) {
    return generateErrorResponse(error);
  }
};

export const updateProfileAmplify = async (
  path: string = "",
  body: Partial<IPerson>
) => {
  const initData: RequestInit = {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
    body: JSON.parse(JSON.stringify(body)),
  };
  try {
    return await API.patch("HospiTest", path, initData);
  } catch (error) {
    return generateErrorResponse(error);
  }
};

export const deleteUserAmplify = async (path: string = "") => {
  const initData: RequestInit = {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
  };
  try {
    return await API.del("HospiTest", path, initData);
  } catch (error) {
    return generateErrorResponse(error);
  }
};

export const getDataFetch = async () => {
  const token = await getAutorizationToken();
  const requestOptions: RequestInit & { response: boolean } = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    response: true,
    //
    // body: JSON.stringify({ title: "React POST Request Example" }),
  };
  if (endPointHospiTest === undefined) return "no endpoint";
  try {
    const response = await fetch(endPointHospiTest, requestOptions);
    console.log(">>>RESPONSE>>>", response.status);

    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};

// export const UploadS3 = (id: string, file: File) => {
//   const config = {
//     bucketName: process.env.REACT_APP_STORAGE_NAME,
//     region: process.env.REACT_APP_REGION,
//     accessKeyId: "JAJHAFJFHJDFJSDHFSDHFJKDSF",
//     secretAccessKey: "jhsdf99845fd98qwed42ebdyeqwd-3r98f373f=qwrq3rfr3rf",
//     s3Url: "https:/your-custom-s3-url.com/" /* optional */,
//   };

//   const ReactS3Client = new S3(config);
//   const newFileName = "test-file";

//   ReactS3Client.uploadFile(file, newFileName)
//     .then((response) => console.log(response))
//     .catch((err) => console.error(err));
// };

export const uploadPhotoAmplify = async (
  path: string = "",
  body: File | string
) => {
  const formData = new FormData();
  formData.append("user_image", body);

  const initData: RequestInit = {
    headers: {
      Authorization: `Bearer ${(await Auth.currentSession())
        .getIdToken()
        .getJwtToken()}`,
    },
    // content-type: "multipart/form-data",
    body: formData,
  };
  try {
    return await API.post("HospiTest", path, initData);
  } catch (error) {
    console.log(error);
  }
};

export const getUserDataCognito = (
  key: UserAttributesKeys
): string | undefined => {
  const regex = new RegExp("Cognito.*userData");
  try {
    let keys: string[] = Object.keys(localStorage).filter((key: string) =>
      regex.test(key)
    );
    const userData = JSON.parse(localStorage.getItem(keys[0]) ?? "");
    return userData.UserAttributes.filter(
      (attr: { Name: string; Value: string }) => attr.Name === key
    )[0]["Value"];
  } catch (error) {
    return undefined;
  }
};

export const clearLocalStorage = () => {};
