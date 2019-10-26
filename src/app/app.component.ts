import { Component } from '@angular/core';


import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'JSON to Table Example';
  constructor (private httpService: HttpClient) { }
  arrBirds: string [];

  ngOnInit () {
    this.httpService.get('http://jsonplaceholder.typicode.com/users').subscribe(
      data => {
        this.arrBirds = data as string [];	 // FILL THE ARRAY WITH DATA.
        console.log(this.arrBirds[1]);
      }
    );
  }
}
