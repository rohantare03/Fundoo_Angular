import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notesArray:any;


  constructor(private note: NotesService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    console.log('Get all notes Successful');
    this.note.getallnotes().subscribe((response : any) => {
      console.log(response);
      this.notesArray=response.data
      this.notesArray.reverse();
      console.log("notesArray", this.notesArray);
      this.notesArray=this.notesArray.filter((object: any) => {
        return object.trash == false && object.archive == false;
        
      })
      console.log(this.notesArray);
    });

  }

  receiveDisplayGetAllNotes($event: any) {
    console.log("Display All Notes",$event);
    this.onSubmit()
  }

  receiveCreateNotes($event: any) {
    console.log("Note Created", $event);
    this.onSubmit()
  }

}
