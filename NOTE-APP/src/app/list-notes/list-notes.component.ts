import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';
import { Note } from '../note.model';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-list-notes',
  templateUrl: './list-notes.component.html',
  styleUrls: ['./list-notes.component.scss']
})
export class ListNotesComponent implements OnInit {
  [x: string]: any;

  Notes: Note[];
  disp: any;
  @Output() displayChange = new EventEmitter();
  @Output() noteEdit = new EventEmitter();
  @Input()  queryString;
  search: any;

  constructor(private router: Router,private formBuilder: FormBuilder, private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.getNotes()
      .subscribe( data => {
        this.Notes = data;
      });
  }

  deleteNote(Note: Note): void {
    this.noteService.deleteNote(Note._id)
      .subscribe( data => {
        this.Notes = this.Notes.filter(u => u !== Note);
      })
  };

  editNote(Note: Note): void {
    console.log('editing');
    this.noteService.setId(Note._id.toString());
    localStorage.setItem("note", JSON.stringify(Note));
    this.disp = true;
    localStorage.setItem("editdisplay", this.disp);
    this.noteEdit.emit(Note.name); 
    this.displayChange.emit(this.disp);
    var obj = new UpdateNotesComponent(this.formBuilder, this.noteService);
    obj.ngOnInit();
  };

}
