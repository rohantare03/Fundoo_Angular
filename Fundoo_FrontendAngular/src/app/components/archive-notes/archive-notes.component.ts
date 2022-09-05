import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-archive-notes',
  templateUrl: './archive-notes.component.html',
  styleUrls: ['./archive-notes.component.scss']
})
export class ArchiveNotesComponent implements OnInit {
  archiveList: any

  constructor(private notes: NotesService) { }

  ngOnInit(): void {
    this.getArchiveNotes();
  }

  getArchiveNotes() {
    console.log('Get Archive List Successful');
    this.notes.getallnotes().subscribe((response: any) => {
      // console.log(response);
      this.archiveList=response.data;
      this.archiveList.reverse();
      this.archiveList=this.archiveList.filter((object: any) => {
        return object.archive == true;
      })
      console.log("Archive list", this.archiveList);
    })
  }

  Unarchive(note:any) {

    let reqData={
      noteID:note.noteID,
    }
    console.log(reqData)
    this.notes.archivenotes(reqData).subscribe((response: any) => {
      console.log("Note UnArchived Successfully",response);
    })
  }

}
