import React from "react";

export type RoleUser = "student" | "host"; // | "strange";

export type TGender = "male" | "female" | "prefer_not_answer";
export type TVerify = "verifying" | "verified" | "unverified" | "failed";
export type TExperience =
  | "Lived with host"
  | "Lived abroad"
  | "Lived on my own"
  | "None of the above";

export interface ICityOfRecidence {
  state: "Netherlands";
  city: string;
}

export interface IPerson {
  user_id: string;
  first_name?: string;
  last_name?: string;
  phone_code?: string;
  phone_number?: string;
  gender?: TGender;
  spoken_languages?: string[];
  description?: string;
  privacy: number;
  user_type: RoleUser;
  // Student
  birth_date?: string;
  birth_country?: string;
  preferred_move_in?: string;
  preferred_move_out?: string;
  max_budget?: number;
  city_of_residence?: ICityOfRecidence;
  study?: string;
  past_experience?: TExperience[];
  autonomy?: number;
  // Host
  requested_autonomy?: number;
  verification_status?: TVerify;
  // Service
  is_profile_complete?: boolean;
  thumbnail_url?: string;
}

// export interface IPersonalDetails {
//   firstName: string;
//   lastName: string;
//   birthday: string; // YYYY-DD-MM
//   countryBirth: string;
//   phone: string;
// }

// export interface ICriteria {
//   inDate: string; // YYYY-DD-MM
//   outDate: string; // YYYY-DD-MM
//   budget: number;
//   city: string;
// }

// export interface IAbout {
//   gender: "male" | "female" | "prefer_not_answer";
//   study: string;
//   languages: string; // ISO 2 Letter Language Codes. Coma separete!!!!
//   experience: TExperience[];
//   story: string;
// }

// export interface IPreferences {
//   privacy: number;
//   newInTown: number;
// }

// export interface IPerson {
//   profile: RoleUser;
//   personalDetails?: Partial<IPersonalDetails>;
//   searchCriteria?: Partial<ICriteria>;
//   about?: Partial<IAbout>;
//   preferences?: Partial<IPreferences>;
//   photo?: string;
// }

// export type TPartStudent = IPersonalDetails | ICriteria | IAbout | IPreferences;

export interface IInputData {
  readonly title?: string;
  readonly placeholder?: string;
  readonly prefix?: string | React.ReactNode | undefined;
  children?: React.ReactNode;
}

export type UserAttributesKeys = "sub" | "email_verified" | "profile" | "email";
export type StrNum = string | number;
export type DateNone = Date | undefined;

export interface ISelectItems {
  value: StrNum;
  label: string;
}

export interface IPropsFC {
  title: string;
  placeholder: string;
  w: string;
  grow: string;
}

export interface IValidatorIn {
  readonly line: StrNum; //    <- value for validate
  params?: { [propName: string]: StrNum };
}

export interface IValidateOut {
  //   state: validatorState;
  state: boolean;
  message: string;
}

export type TMode = "create" | "edit";
