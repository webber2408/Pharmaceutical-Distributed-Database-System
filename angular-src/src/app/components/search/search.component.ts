import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  name: String;
  salt0: String;
  salt1: String;
  salt2:String;
  salt3: String;
  sort: String;
  substitute :String;
  result=[];

  constructor(private validateService: ValidateService ,
              private flashMessage:FlashMessagesService,
              private authService: AuthService,
              private router:Router) { }

  ngOnInit() {
  }

  onSearchSubmit(){
    // console.log(this.name);
      if(this.name == undefined){
        this.name = "";
      }
      if(this.salt0 == undefined){
        this.salt0 = "";
      }
      if(this.salt1 == undefined){
        this.salt1 = "";
      }
      if(this.salt2 == undefined){
        this.salt2 = "";
      }
      if(this.salt3 == undefined){
        this.salt3 = "";
      }
    const medicine = {
       name:this.name,       
       salt0:this.salt0,
       salt1:this.salt1,
       salt2:this.salt2,
       salt3:this.salt3,
       sort:this.sort,
       substitute:this.substitute
    }
    
   
  //Search Medicine
   this.authService.searchMedicine(medicine).subscribe(data => {
     //console.log(data);
     if(data.success){
    //console.log("here here");
     //console.log(data.results);
      this.result = data.results;
      //console.log("here here 1");
      //console.log(this.result);
     }
     else{
      this.flashMessage.show("Something went wrong , please register again !",{
        cssClass: 'alert-danger',
        timeout:3000
      });
      this.router.navigate(['/search']);
     }
   });
  }

}
