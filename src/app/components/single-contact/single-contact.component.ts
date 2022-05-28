import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Contact } from 'src/app/models/contact.interface';
import { InteractionService } from 'src/app/services/interaction.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-contact',
  templateUrl: './single-contact.component.html',
  styleUrls: ['./single-contact.component.css']
})
export class SingleContactComponent implements OnInit {

  contacts: Contact[] = [];
  singleContact!: Contact | undefined;
  search: string = '';
  idContact: string = '';
  clickEventSubscription:Subscription;

  constructor(private activatedRoute: ActivatedRoute,
              private apiCallService: ApiCallService,
              private interactionService: InteractionService) {
    this.activatedRoute.params.subscribe(params => {
      this.idContact = params['id'];
    })

    this.clickEventSubscription = this.interactionService.getContactId()
    .subscribe(()=>this.callSingleContact() )

   }

  ngOnInit(): void {
  }

  callSingleContact(){
    this.apiCallService.getContacts()
      .subscribe( resp => {
        // this.contacts = resp.contacts;
          this.singleContact = resp.contacts.find(contact => contact.id === this.idContact);
          console.log(this.singleContact)



      })

  }

  //Search filter
  receiveSearch($event:string){
    this.search = $event;
  }

}
