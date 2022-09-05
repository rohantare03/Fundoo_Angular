import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesService } from 'src/app/services/notesService/notes.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title: any
  description: any
  id: any
  color: any
  


  constructor(private note: NotesService,  public dialogRef: MatDialogRef<UpdateNoteComponent>,  @Inject(MAT_DIALOG_DATA) public data: any,) {
    this.title=data.title;
    this.description=data.description;
    this.id=data.noteID;
    this.color=data.color;
  }

  ngOnInit(): void {
  }

  closeDialog() {
    let reqData = {
      title: this.title,
      description: this.description,
      noteID: this.id,
      color: this.color
    }
    this.note.updatenotes(reqData, this.id).subscribe((response:any) =>{ 
      console.log("update response", response); 
            
    })
    this.dialogRef.close()
  }
 

}
