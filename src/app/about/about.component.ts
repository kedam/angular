import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  exampleForm = new FormGroup ({
    firstName: new FormControl(),
    lastName: new FormControl(),

  });


  model: any = {};

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }


}
