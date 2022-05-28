import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SingleContactComponent } from './single-contact/single-contact.component';



@NgModule({
  declarations: [
    SearchComponent,
    SingleContactComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SearchComponent,
    SingleContactComponent
  ]
})
export class ComponentsModule { }
