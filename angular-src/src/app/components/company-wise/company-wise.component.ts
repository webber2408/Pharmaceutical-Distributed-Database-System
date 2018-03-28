import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-company-wise',
  templateUrl: './company-wise.component.html',
  styleUrls: ['./company-wise.component.css']
})
export class CompanyWiseComponent implements OnInit {
  Name: String;
  Salt0: String;
  Salt1: String;
  Salt2:String;
  Salt3: String;
  Company:String;
  Combinations:String;
  Volume:String;
  Presentation:String;
  Price:number;
  result=[];
  Page:number;
  constructor(private authService: AuthService,
              private router:Router) { }

  ngOnInit() {
    this.Page = 0;

//     this.authService.getAllMedicines().subscribe(profile => {
//       //console.log(profile);
//       //console.log(profile.results);
//       this.result = profile.results;
//       //console.log(this.exp)
//       //this.user = profile.user;
//    },
//  err =>  {
//      console.log(err);
//      return false;
//  });
    
 
  }

  loadMedicines(){
    this.Page = this.Page+1;
    this.authService.getAllMedicinesCompanywise(this.Page).subscribe(profile => {
      
      this.result = profile.results;
      console.log(this.result);
      //console.log(JSON.stringify(this.result));
    });
  }
  
  loadPreviousMedicines(){
    this.Page = this.Page-1;
    this.authService.getAllMedicinesCompanywise(this.Page).subscribe(profile => {
      
      this.result = profile.results;
      console.log(this.result);
      //console.log(JSON.stringify(this.result));
    });
  }
}
