import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { DataService } from 'src/app/services/dataService/data.service';

@Component({
  selector: 'app-display-notes',
  templateUrl: './display-notes.component.html',
  styleUrls: ['./display-notes.component.scss']
})
export class DisplayNotesComponent implements OnInit {
  @Input() NotesList:any;
  @Output() DisplayGetAllNotes = new EventEmitter<string>();
  msg: any;
  searchNote: any;
  

  constructor(public dialog: MatDialog, private data: DataService) { }

  ngOnInit(): void {
    // console.log("Notes Display Successful", this.NotesList);
    this.data.incomingData.subscribe((response) => {
      console.log("Search :", response);
      this.searchNote = response;
    })

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
      this.DisplayGetAllNotes.emit(response);
    })
  }

  receiveNotesDisplay($event : any) {
    console.log("Display Notes",$event)
    this.msg= $event;
    console.log("msg", this.msg);
    this.DisplayGetAllNotes.emit(this.msg);
  }  
}
