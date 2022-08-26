import { Component, OnInit } from '@angular/core';
import { NoteserviceService } from 'src/app/Service/NoteService/noteservice.service'

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesArray:any;

  constructor(private note : NoteserviceService) { }

  ngOnInit(): void {
    console.log('Get all notes Successful');
    this.note.getallnotes().subscribe((response : any) => {
      console.log(response);
      this.notesArray=response.data
      console.log("notesArray", this.notesArray);
  });
}

}
