import { IValidatorIn, IValidateOut } from "../interfaces/intarfaces";
import {EMPTY} from './constants'

export const useValidateLength: (x: IValidatorIn) => IValidateOut = ({
  line,
  params,
}): IValidateOut => {
  try {
    const value = String(line);
    if (value.length === 0) return { state: true, message: EMPTY };
    const { min = 0, max = 255 } = params ? params : { min: 0, max: 255 };
    if (value && value.length > Number(max))
      return { state: false, message: "Too long line" };
    if (value && value.length < Number(min))
      return { state: false, message: "Too shot line" };
    return { state: true, message: "It's right value" };
  } catch {
    return { state: false, message: "Bad params for validator" };
  }
};

export const useValidateSymbol: (x: IValidatorIn) => IValidateOut = ({
  line,
  params,
}): IValidateOut => {
  try {
    const value = String(line);
    if (value && value.length > 0)
      return { state: true, message: "It's right value" };
    return { state: false, message: "Bad params for validator" };
  } catch {
    return { state: false, message: "Bad params for validator" };
  }
};

export const useValidateEmail: (x: IValidatorIn) => IValidateOut = ({
  line,
  params,
}): IValidateOut => {
  try {
    const value = String(line);
    if (value.length === 0) return { state: true, message: EMPTY };
    const templateEmail =
      "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$";
    const { pattern = templateEmail } = params
      ? params
      : { pattern: templateEmail };
    if (typeof pattern !== "string")
      return { state: false, message: "Bad pattren for validator" };
    
    const regExp = new RegExp(String(pattern));
    if (regExp.test(value)) return { state: true, message: "It's right email" };
    return { state: false, message: "It's wrong email" };
  } catch {
    return { state: false, message: "Bad params for validator" };
  }
};
