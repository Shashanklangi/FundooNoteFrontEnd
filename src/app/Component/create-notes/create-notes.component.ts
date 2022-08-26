import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteserviceService } from 'src/app/Service/NoteService/noteservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  createForm : FormGroup;
  display : boolean=true;
  token : any;
  submitted = false


  constructor(private formBuilder: FormBuilder, private note: NoteserviceService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm = this.formBuilder.group({
      title: ['', Validators.required],
      Description: ['', Validators.required]
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }

  onSubmit() {
    this.submitted=true;
    if (this.createForm.valid) {
      console.log("notes created Successful");
      let reqData = {
        title: this.createForm.value.title,
        description: this.createForm.value.Description

      }
      console.log(reqData);
      this.note.createnotes(reqData).subscribe((response : any) => {
        console.log(response);
      });
    }
  }

}
