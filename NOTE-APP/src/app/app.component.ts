import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  display: any = false;
  queryString: any;
  edit: any = false;
  constructor(private noteService: NoteService) {}
  ngOnInit() {
  }
  adding() {
    this.display = true;
    this.edit = false;
  }

  changedisplay(event) {
    this.display = false;
    this.edit = event;
  }

}
