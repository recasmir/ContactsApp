import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private subject$ = new Subject<string>();

  constructor() { }

  sendContactId(id:string){
    this.subject$.next(id);
  }

  getContactId(): Observable<string>{
    return this.subject$.asObservable();
  }

}
