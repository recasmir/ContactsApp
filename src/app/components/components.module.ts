import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SingleContactComponent } from './single-contact/single-contact.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchComponent,
    SingleContactComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SearchComponent,
    SingleContactComponent
  ]
})
export class ComponentsModule { }
