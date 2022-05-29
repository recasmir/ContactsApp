import { SingleContactComponent } from './../../components/single-contact/single-contact.component';
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
  increment: number = 50;
  abc: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  letters: string[] = this.abc.split('');
  contactCalled: boolean = false;
  isShowAbcSearch:boolean = true;
  isShowAbcButton: boolean = false;

  constructor(private apiCallService: ApiCallService,
              private router: Router,
              private interactionService: InteractionService
              ) {
                //AAA
                console.log('im in const HOME')


              }

  ngOnInit(): void {
    this.showContacts();
    //AAA
    console.log('im in ON INIT HOME ')

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
    console.log('im in expandContact home page beginning')
    this.contactCalled = true;
    //AAA
    console.log('ID ' + id);
    this.interactionService.sendContactId(id);
    this.router.navigate([`contact/${id}`]);

    console.log('im in expandContact home page end')
    //AAA
    console.log('contactCalled' + this.contactCalled);

  }

  //Pagination
  changePage(page:number){
    this.page=page;
  }

  //Search filter
  receiveSearch($event:string){
    this.search = $event;
    this.isShowAbcSearch = false;
    this.isShowAbcButton = true;
    if(this.search.length === 0){
      this.isShowAbcSearch = true;
      this.isShowAbcButton = false;
    }
  }

}

