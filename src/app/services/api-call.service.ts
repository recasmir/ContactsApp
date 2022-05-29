import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContactsSearchResponse } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  private api = 'https://fakecontactsspq.z6.web.core.windows.net/contactos.json';

  private apiFake = 'assets/data.json';

  constructor(private http: HttpClient) { }


  getContacts(){
    const headers = new HttpHeaders()
    .set('Access-Control-Allow-Origin','*')
    .set('content-type', 'application/json')

    // let headers = new HttpHeaders()
    // headers=headers.set('content-type','application/json')
    // headers=headers.set('Access-Control-Allow-Origin', '*');
    // console.log(headers)

    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Origin': '*',
    //   'Content-type': 'application/json'
    // })

    // console.log(headers);

    // return this.http.get<ContactsSearchResponse>(this.api, {headers})
    return this.http.get<ContactsSearchResponse>(this.apiFake)

  }

}

