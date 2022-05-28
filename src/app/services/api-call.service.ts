import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactsSearchResponse } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private api = 'https://fakecontactsspq.z6.web.core.windows.net/contactos.json';

  constructor(private http: HttpClient) { }

  getContacts(){
    return this.http.get<ContactsSearchResponse>(this.api);
  }
}
