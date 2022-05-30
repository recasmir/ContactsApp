import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Contact } from 'src/app/models/contact.interface';
import { InteractionService } from 'src/app/services/interaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  shuffledContacts: Contact[] = [];
  singleContact!: any;
  search: string = '';
  page: number = 0;
  increment: number = 20;
  idContact: string = '';
  clickEventSubscription: Subscription;
  isContactCalled: boolean = false;

  constructor(private apiCallService: ApiCallService,
              private interactionService: InteractionService) {

    this.clickEventSubscription = this.interactionService.getContactId()
    .subscribe((id)=>{
      this.isContactCalled = true;
      this.callSingleContact(id);
      this.showContactsOfContact();
    })

   }

  ngOnInit(): void {}

  callSingleContact(id:string){
    this.apiCallService.getContacts()
      .subscribe( resp => {
          this.singleContact = resp.contacts.find(contact => contact.id === id);
      })
  }

  showContactsOfContact(){
    this.apiCallService.getContacts()
      .subscribe( resp => {
        this.contacts = resp.contacts

        let shuffled = this.contacts
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)

        this.shuffledContacts = shuffled;
      })
  }

 //Pagination
  statusPage: boolean[] = [true, false, false, false, false];
  paginationArray:number[] = [0,20,40,60,80];

  changePage(page: number, index: number){
    this.page = page;
    this.statusPage = [false, false, false, false, false];
    this.statusPage[index] = true;
  }

  //Search filter
  receiveSearch($event: string){
    this.search = $event;
  }

  ngOnDestroy(){
    this.clickEventSubscription.unsubscribe();
  }

}
