export interface Resume {
  basics: IBasics;
  work: IWork[];
  education: IEducation[];
  skills: IInterest[];
  languages: ILanguage[];
  interests: IInterest[];
  references: IReference[];
  projects: IProject[];
  meta: IMeta;
}

export interface IBasics {
  name: string;
  label: string;
  image: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: ILocation;
  profiles: IProfile[];
}

export interface ILocation {
  address: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
}

export interface IProfile {
  network: string;
  username: string;
  url: string;
}

export interface IEducation {
  institution: string;
  url: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
  score: string;
}

export interface IInterest {
  name: string;
  keywords: string[];
}

export interface ILanguage {
  language: string;
  fluency: string;
}

export interface IMeta {
  canonical: string;
  version: string;
  lastModified: Date;
}

export interface IProject {
  name: string;
  description: string;
  highlights: string[];
  keywords: string[];
  url: string;
  roles: string[];
  entity: string;
}

export interface IReference {
  name: string;
  designation: string;
  profile: string;
}

export interface IWork {
  name: string;
  location: string;
  position: string;
  url: string;
  startDate: string;
  endDate: string;
  summary: string;
  highlights: any[];
}
