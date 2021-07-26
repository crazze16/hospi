import { IPerson, ICityOfRecidence, RoleUser } from "interfaces/intarfaces";

type TKeyPerson = keyof IPerson;
export interface IResault {
  [propName: string]: any;
}

export const Comparator = (
  newData: Partial<IPerson>,
  oldData: Partial<IPerson>,
  user_type: RoleUser
): IResault => {
  const resaultData: IResault = {};
  let fields: Partial<TKeyPerson>[] = [
    "user_id",
    "first_name",
    "last_name",
    "phone_code",
    "phone_number",
    "gender",
    "spoken_languages",
    "description",
    "privacy",
    "user_type",
  ];

  fields = [
    ...fields,
    ...(user_type === "student"
      ? [
          "birth_date",
          "birth_country",
          "preferred_move_in",
          "preferred_move_out",
          "max_budget",
          "city_of_residence",
          "study",
          "past_experience",
          "autonomy",
        ]
      : ["requested_autonomy"]),
  ] as Partial<TKeyPerson>[];
  const toLineObj = (x: ICityOfRecidence | undefined) => {
    if (x === undefined || x === null) return "";
    return x.city.trim().length > 0 ? x.state + x.city : "";
  };
  const toLineArray = (x: string[] | undefined) => {
    if (x === undefined || x === null) return "";
    return x.sort().join();
  };
  for (let field of fields) {
    if (Object.keys(oldData).includes(field)) {
      if (
        field === "city_of_residence" &&
        toLineObj(newData[field]) === toLineObj(oldData[field])
      ) {
        continue;
      } else if (
        (field === "spoken_languages" || field === "past_experience") &&
        toLineArray(newData[field]) === toLineArray(oldData[field])
      ) {
        continue;
      } else if (
        newData[field] === oldData[field] ||
        ((newData[field] === "" || newData[field] === undefined) &&
          oldData[field] === null)
      ) {
        continue;
      } else if (
        (String(newData[field])?.length === 0 &&
          String(oldData[field])?.length === 0) ||
        (field === "max_budget" && String(newData[field]) === "0")
      )
        continue;
    } else if (field === "past_experience" && newData[field]?.length === 0)
      // If choose nothing insert None
      resaultData["past_experience"] = ["None of the above"];
    else if (field === "spoken_languages" && newData[field]?.length === 0)
      continue;
    else if (field === "city_of_residence" && newData[field]?.city.length === 0)
      continue;
    else if (!newData[field] || String(newData[field])?.length === 0) continue;

    if (field === "past_experience" && newData[field]?.length === 0)
      resaultData["past_experience"] = ["None of the above"];
    else resaultData[field] = newData[field] || null;
  }
  if (Object.keys(resaultData).includes("max_budget"))
    resaultData["max_budget"] = Number(resaultData["max_budget"]);
  return resaultData;
};
