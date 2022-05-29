import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.interface';
import { ApiCallService } from 'src/app/services/api-call.service';
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
  increment: number = 50;
  statusPage: boolean = true;
  abc: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letters: string[] = this.abc.split('');
  isShowAbcSearch:boolean = true;
  isShowAbcButton: boolean = false;

  constructor(private apiCallService: ApiCallService,
              private interactionService: InteractionService
              ) {}

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

  expandContact(id: string){
    this.interactionService.sendContactId(id);
  }

  changePage(page: number){
    this.page = page;
    this.statusPage = !this.statusPage;
  }

  receiveSearch($event: string){
    this.search = $event;
    this.isShowAbcSearch = false;
    this.isShowAbcButton = true;
    if(this.search.length === 0){
      this.isShowAbcSearch = true;
      this.isShowAbcButton = false;
    }
  }

}

