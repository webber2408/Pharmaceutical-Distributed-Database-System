import { Component, OnInit } from '@angular/core';
import {Http , Headers , Response} from '@angular/http';

@Component({
  selector: 'app-realtimearea',
  templateUrl: './realtimearea.component.html',
  styleUrls: ['./realtimearea.component.css']
})
export class RealtimeareaComponent implements OnInit {
fetchedHtml:String;
  constructor(private http:Http) { 
    // let headers = new Headers();
    // headers.append('Content-Type','application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    // headers.append('Access-Control-Allow-Credentials', 'true');
    // http.get('https://coltaemanuela.github.io/FireEdit/',{headers: headers}).subscribe(res => 
    // this.fetchedHtml = res.json());

    // const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = "https://coltaemanuela.github.io/FireEdit/"; // site that doesn’t send Access-Control-*
    // fetch(proxyurl + url) // https://cors-anywhere.herokuapp.com/https://example.com
    // .then(response => response.text())
    // .then(contents => console.log(contents))
  }

  ngOnInit() {
  }

}
