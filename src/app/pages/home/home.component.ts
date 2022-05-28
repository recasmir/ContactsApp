import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';
import { ApiCallService } from 'src/app/services/api-call.service';
import { Router } from '@angular/router';
import { InteractionService } from './../../services/interaction.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contacts: Contact[] = [];
  search: string = '';
  page: number = 0;
  abc: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letters: string[] = this.abc.split('');

  constructor(private apiCallService: ApiCallService,
              private router: Router,
              private interactionService: InteractionService) { }

  ngOnInit(): void {
    this.showContacts();
  }

  showContacts(){
    this.apiCallService.getContacts()
      .subscribe( resp => {
        this.contacts = resp.contacts;
        this.contacts.sort((a,b) => a.name > b.name ? 1: -1);
        console.log(this.contacts);
      })
  }

  expandContact(id:string){
    this.router.navigate([`contact/${id}`]);
    this.interactionService.sendContactId(id);
  }

  //Pagination
  changePage(page:number){
    this.page=page;
  }

  //Search filter
  receiveSearch($event:string){
    this.search = $event;
  }

}

