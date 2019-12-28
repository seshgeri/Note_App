import { Injectable } from '@angular/core';
import { Note } from './note.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NoteService {

  idval: any;
  updatedNote: Note;
  displayval: any;
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://192.168.5.52:8080/notes';
  getNotes() {
    return this.http.get<Note[]>(this.baseUrl);
  }

  getNoteById(idnum: number) {
    return this.http.get<Note>(this.baseUrl + '/' + idnum);
  }

  createNote(Note: Note) {
    return this.http.post('http://192.168.5.52:8080/notes', Note);
  }

  updateNote(val, Note: Note) {
    return this.http.put('http://192.168.5.52:8080/notes' + '/' + val ,Note);
  }

  deleteNote(idnum: number) {
    return this.http.delete('http://192.168.5.52:8080/notes' + '/' + idnum);
  }

  setId(idnum) {
    this.idval = idnum;
  }

  getId() {
    return this.idval;
  }

  setNote(Note: Note) {
    this.updatedNote = Note;
  }

  getNote() {
    return this.updatedNote;
  }
}
