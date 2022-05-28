import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleContactComponent } from './components/single-contact/single-contact.component';
import { HomeComponent } from './pages/home/home.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'contact/:id', component:SingleContactComponent},
  {path:'**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
