import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListNotesComponent } from './list-notes/list-notes.component';


const routes: Routes = [
  { path: 'list-note', component: ListNotesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
