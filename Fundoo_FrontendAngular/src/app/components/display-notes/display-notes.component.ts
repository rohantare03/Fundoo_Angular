import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() NotesList:any;
  

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    // console.log("Notes Display Successful", this.NotesList);
  }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '40%',
      height: 'auto',
      panelClass: 'updateDialog',
      data: note
    });
    dialogRef.afterClosed().subscribe(response => {
      console.log('The dialog was closed', response);
    })
  }

}
