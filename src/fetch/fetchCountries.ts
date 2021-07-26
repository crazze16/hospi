import { ISelectItems } from "../interfaces/intarfaces";
import { countryData } from "../assets/country/isoNameCountries";

export const getCountries = (): ISelectItems[] => {
  return countryData.map((item) => ({
    value: item["code"],
    label: item["name"],
  }));
  //   fetch('')
  //   .then(response=> response.json())
  //   .then(data=>console.log(data))
};
export const getNameCountry = (x: string) => {
  const country = getCountries().filter((item) => item.value === x);
  if (country.length > 0) return country[0].label;
  return "";
};
export const getPhoneCodes = (): ISelectItems[] => {
  let temp: string[] = [];
  return countryData
    .map((item) => ({
      value: item["dial_code"],
      label: String(item["dial_code"]),
    }))
    .filter((x) => {
      if (temp.includes(x.label) || !x.label) return false;
      temp.push(x.label);
      return true;
    })
    .sort((a: ISelectItems, b: ISelectItems) => {
      if (a.label < b.label) return -1;
      else return 1;
    });
};

export const getDegree = (): ISelectItems[] => {
  return [
    { value: "bach", label: "Bachelavr" },
    { value: "master", label: "Master" },
  ];
};

export const getLanguage = (): ISelectItems[] => {
  return [
    { value: "AF", label: "Afrikaans" },
    { value: "SQ", label: "Albanian" },
    { value: "AR", label: "Arabic" },
    { value: "HY", label: "Armenian" },
    { value: "EU", label: "Basque" },
    { value: "BN", label: "Bengali" },
    { value: "BG", label: "Bulgarian" },
    { value: "CA", label: "Catalan" },
    { value: "KM", label: "Cambodian" },
    { value: "ZH", label: "Chinese" },
    { value: "HR", label: "Croatian" },
    { value: "CS", label: "Czech" },
    { value: "DA", label: "Danish" },
    { value: "NL", label: "Dutch" },
    { value: "EN", label: "English" },
    { value: "ET", label: "Estonian" },
    { value: "FJ", label: "Fiji" },
    { value: "FI", label: "Finnish" },
    { value: "FR", label: "French" },
    { value: "KA", label: "Georgian" },
    { value: "DE", label: "German" },
    { value: "EL", label: "Greek" },
    { value: "GU", label: "Gujarati" },
    { value: "HE", label: "Hebrew" },
    { value: "HI", label: "Hindi" },
    { value: "HU", label: "Hungarian" },
    { value: "IS", label: "Icelandic" },
    { value: "ID", label: "Indonesian" },
    { value: "GA", label: "Irish" },
    { value: "IT", label: "Italian" },
    { value: "JA", label: "Japanese" },
    { value: "JW", label: "Javanese" },
    { value: "KO", label: "Korean" },
    { value: "LA", label: "Latin" },
    { value: "LV", label: "Latvian" },
    { value: "LT", label: "Lithuanian" },
    { value: "MK", label: "Macedonian" },
    { value: "MS", label: "Malay" },
    { value: "ML", label: "Malayalam" },
    { value: "MT", label: "Maltese" },
    { value: "MI", label: "Maori" },
    { value: "MR", label: "Marathi" },
    { value: "MN", label: "Mongolian" },
    { value: "NE", label: "Nepali" },
    { value: "NO", label: "Norwegian" },
    { value: "FA", label: "Persian" },
    { value: "PL", label: "Polish" },
    { value: "PT", label: "Portuguese" },
    { value: "PA", label: "Punjabi" },
    { value: "QU", label: "Quechua" },
    { value: "RO", label: "Romanian" },
    { value: "RU", label: "Russian" },
    { value: "SM", label: "Samoan" },
    { value: "SR", label: "Serbian" },
    { value: "SK", label: "Slovak" },
    { value: "SL", label: "Slovenian" },
    { value: "ES", label: "Spanish" },
    { value: "SW", label: "Swahili" },
    { value: "SV", label: "Swedish" },
    { value: "TA", label: "Tamil" },
    { value: "TT", label: "Tatar" },
    { value: "TE", label: "Telugu" },
    { value: "TH", label: "Thai" },
    { value: "BO", label: "Tibetan" },
    { value: "TO", label: "Tonga" },
    { value: "TR", label: "Turkish" },
    { value: "UK", label: "Ukrainian" },
    { value: "UR", label: "Urdu" },
    { value: "UZ", label: "Uzbek" },
    { value: "VI", label: "Vietnamese" },
    { value: "CY", label: "Welsh" },
    { value: "XH", label: "Xhosa" },
  ];
};

export const arrayLanguages = (keys: string[]): string[] => {
  return getLanguage()
    .filter((item) => keys.includes(item.value as string))
    .map((item) => item.label);
};

export const getCyties = (): ISelectItems[] => {
  return [
    { value: "Alkmaar", label: "Alkmaar" },
    { value: "Almelo", label: "Almelo" },
    { value: "Almere", label: "Almere" },
    { value: "Alphen aan den Rijn", label: "Alphen aan den Rijn" },
    { value: "Amersfoort", label: "Amersfoort" },
    { value: "Amstelveen", label: "Amstelveen" },
    { value: "Amsterdam", label: "Amsterdam" },
    { value: "Apeldoorn", label: "Apeldoorn" },
    { value: "Arnhem", label: "Arnhem" },
    { value: "Assen", label: "Assen" },
    { value: "Bergen op Zoom", label: "Bergen op Zoom" },
    { value: "Breda", label: "Breda" },
    { value: "Capelle aan den IJssel", label: "Capelle aan den IJssel" },
    { value: "Delft", label: "Delft" },
    { value: "Den Haag", label: "Den Haag" },
    { value: "Den Helder", label: "Den Helder" },
    { value: "Deventer", label: "Deventer" },
    { value: "Doetinchem", label: "Doetinchem" },
    { value: "Dordrecht", label: "Dordrecht" },
    { value: "Ede", label: "Ede" },
    { value: "Eindhoven", label: "Eindhoven" },
    { value: "Emmen", label: "Emmen" },
    { value: "Enschede", label: "Enschede" },
    { value: "Gouda", label: "Gouda" },
    { value: "Groningen", label: "Groningen" },
    { value: "Haarlem", label: "Haarlem" },
    { value: "Haarlemmermeer", label: "Haarlemmermeer" },
    { value: "Heerlen", label: "Heerlen" },
    { value: "Helmond", label: "Helmond" },
    { value: "Hengelo", label: "Hengelo" },
    { value: "Hilversum", label: "Hilversum" },
    { value: "Hoogeveen", label: "Hoogeveen" },
    { value: "Hoorn", label: "Hoorn" },
    { value: "Katwijk", label: "Katwijk" },
    { value: "Leeuwarden", label: "Leeuwarden" },
    { value: "Leiden", label: "Leiden" },
    { value: "Leidschendam-Voorburg", label: "Leidschendam-Voorburg" },
    { value: "Lelystad", label: "Lelystad" },
    { value: "Maastricht", label: "Maastricht" },
    { value: "Middelburg", label: "Middelburg" },
    { value: "Nieuwegein", label: "Nieuwegein" },
    { value: "Nijmegen", label: "Nijmegen" },
    { value: "Oss", label: "Oss" },
    { value: "Purmerend", label: "Purmerend" },
    { value: "Roermond", label: "Roermond" },
    { value: "Roosendaal", label: "Roosendaal" },
    { value: "Rotterdam", label: "Rotterdam" },
    { value: "'s Hertogenbosch", label: "'s Hertogenbosch" },
    { value: "Schiedam", label: "Schiedam" },
    { value: "Sittard-Geleen", label: "Sittard-Geleen" },
    { value: "Spijkenisse", label: "Spijkenisse" },
    { value: "Súdwest-Fryslân", label: "Súdwest-Fryslân" },
    { value: "Terneuzen", label: "Terneuzen" },
    { value: "Tilburg", label: "Tilburg" },
    { value: "Utrecht", label: "Utrecht" },
    { value: "Veenendaal", label: "Veenendaal" },
    { value: "Venlo", label: "Venlo" },
    { value: "Vlaardingen", label: "Vlaardingen" },
    { value: "Westland", label: "Westland" },
    { value: "Zaanstad", label: "Zaanstad" },
    { value: "Zeist", label: "Zeist" },
    { value: "Zoetermeer", label: "Zoetermeer" },
    { value: "Zwolle", label: "Zwolle" },
  ];
};
