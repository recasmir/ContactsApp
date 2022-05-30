import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactsSearchResponse } from '../models/contact.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http: HttpClient) { }

  getContacts(){
    const headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin','*')
    .set('content-type', 'application/json')

    return this.http.get<ContactsSearchResponse>(`${environment.BACKEND_API_MOCK}`, {headers})
  }
}
