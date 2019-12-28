import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NoteService } from '../note.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.css']
})
export class UpdateNotesComponent implements OnInit {

  updateForm: FormGroup;
  id: number;
  constructor(private formBuilder: FormBuilder, private noteService: NoteService) { }
  ngOnInit() {
    this.updateForm = this.formBuilder.group({
      idnum: [],
      name: [],
      description: ['', Validators.required]
    });
    const note =  JSON.parse(localStorage.getItem("note"));
    this.updateForm.controls.idnum.patchValue(note._id);
    this.updateForm.controls.name.patchValue(note.name);
    this.updateForm.controls.description.patchValue(note.description);
    this.id = note._id;
  }

  onSubmit() {
    this.noteService.updateNote(this.id, this.updateForm.value).subscribe( data => {
      console.log('notes updated sucessfully');
      location.reload();
    });
  }
}
