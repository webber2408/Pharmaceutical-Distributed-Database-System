import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-allmedicines',
  templateUrl: './allmedicines.component.html',
  styleUrls: ['./allmedicines.component.css']
})
export class AllmedicinesComponent implements OnInit {
  Name: String;
  Salt0: String;
  Salt1: String;
  Salt2:String;
  Salt3: String;
  Company:String;
  Combinations:String;
  Volume:String;
  Presentation:String;
  Price:Number;
  result=[];
  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit() {
    this.authService.getAllMedicines().subscribe(profile => {
      //console.log(profile);
      //console.log(profile.results);
      this.result = profile.results;
      //console.log(this.exp)
      //this.user = profile.user;
   },
 err =>  {
     console.log(err);
     return false;
 });
  }

}
