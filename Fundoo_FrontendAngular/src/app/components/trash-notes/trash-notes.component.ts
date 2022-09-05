import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-trash-notes',
  templateUrl: './trash-notes.component.html',
  styleUrls: ['./trash-notes.component.scss']
})
export class TrashNotesComponent implements OnInit {
  trashList: any;
 

  constructor(private notes: NotesService) { }

  ngOnInit(): void {
    this.TrashList();

  }

  TrashList() {
    console.log('Get trash list successful');
    this.notes.getallnotes().subscribe((response : any) => {
      // console.log(response);
      this.trashList=response.data; 
      this.trashList.reverse();     
      this.trashList = this.trashList.filter((object:any) => {
        return object.trash == true;
      })
      console.log("trash list", this.trashList);
    })
  }

  Untrash(note:any) {

    let reqData={
      noteID:note.noteID,
    }
    console.log(reqData)
    this.notes.trashnotes(reqData).subscribe((response: any) => {
      console.log("Note Untrashed Successfully",response);
    })
  }

}
