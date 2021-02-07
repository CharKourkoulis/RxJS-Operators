import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  url = '/api/courses';
  constructor() { }

  ngOnInit() {

    const http$ = new Observable(observer => {
      fetch(this.url).then(response => {
        return response.json();
      })
      .then(body => {
        observer.next(body);
        observer.complete();
      })
      .catch(err => {
        observer.error(err);
      })
    });

  }

}
