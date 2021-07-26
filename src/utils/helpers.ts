// import { ErrorMessage } from "components/generic";

interface IError {
  status: number;
  errorMessages: string[];
}

export function generateErrorResponse(error: any): IError {
  try {
    const {
      response: { status, data },
    } = error;

    const errorMessages = data.detail.map((err: any) => err.msg);

    console.log({
      status,
      errorMessages,
    });
    return {
      status,
      errorMessages,
    };
  } catch (error) {
    console.log(error);
  }

  return {
    status: 0,
    errorMessages: [],
  };
}
