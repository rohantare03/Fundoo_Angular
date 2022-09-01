import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesService } from 'src/app/services/notesService/notes.service';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createForm! : FormGroup;
  display : boolean=true;
  token : any;
  submitted = false

  constructor(private formBuilder: FormBuilder, private note: NotesService) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required]
    })
    // console.log(this.token);
  }

  // opendisplay(): void {
  //   this.display=true;
  // }

  // closedisplay(): void {
  //   this.display=false;
  // }

  onSubmit() {
    this.submitted=true;
    if (this.createForm.valid) {
      console.log("notes created Successful");
      let reqData = {
        title: this.createForm.value.title,
        description: this.createForm.value.description

      }
      console.log(reqData);
      this.note.createnotes(reqData).subscribe((response : any) => {
        console.log(response);
      });
      
    }
    this.display=true;
  }

}
