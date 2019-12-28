import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-add-notes',
  templateUrl: './add-notes.component.html',
  styleUrls: ['./add-notes.component.scss']
})
export class AddNotesComponent implements OnInit {
  id: any = 999;

  constructor(private formBuilder: FormBuilder,private router: Router, private noteService: NoteService) { }

  addForm: FormGroup;

  ngOnInit() {
    this.id = Math.floor((Math.random() * 100) + 1);
    this.addForm = this.formBuilder.group({
      idnum: [this.id],
      name: [],
      description: ['', Validators.required]
    });
  }

  onSubmit() {
    this.id = Math.floor((Math.random() * 100) + 1);
    this.noteService.createNote(this.addForm.value)
      .subscribe( data => {
        console.log('notes created sucessfully');
        location.reload();
      });
  }

}
