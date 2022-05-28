export interface ContactsSearchResponse {
  contacts: Contact[];
}

export interface Contact {
  id:      string;
  age:     number;
  name:    string;
  gender:  string;
  company: string;
  email:   string;
  photo:   string;
}

// export enum Gender {
//   Female = "female",
//   Male = "male",
// }
