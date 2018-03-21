import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-consultants',
  templateUrl: './consultants.component.html',
  styleUrls: ['./consultants.component.css']
})
export class ConsultantsComponent implements OnInit {

  consultation:String;
  con = [];

  constructor(private validateService: ValidateService ,
    private flashMessage:FlashMessagesService,
    private authService: AuthService,
    private router:Router) { }

  ngOnInit() {
    this.authService.getConsultation().subscribe(profile => {
      //console.log(profile);
      //console.log(profile.results);
      this.con = profile.results;
      //console.log(this.exp)
      //this.user = profile.user;
   },
 err =>  {
     console.log(err);
     return false;
 });
  }
 
  getConsultation(){
    this.authService.getConsultation().subscribe(profile => {
      //console.log(profile);
      //console.log(profile.results);
      this.con = profile.results;
      //console.log(this.exp)
      //this.user = profile.user;
   },
 err =>  {
     console.log(err);
     return false;
 });
  }

  onConsultationSubmit(){
    const con = {
      consultation:this.consultation
    }
   //console.log("hello");
    //Required fields 
    if(!this.validateService.validateConsultation(con)){
      //console.log("hello");
      this.flashMessage.show("Please fill in all fields !",{
        cssClass: 'alert-danger',
        timeout:3000
      });
      return false;
  }

    //Start authservice work
    this.authService.addConsultation(con).subscribe(data => {
      if(data.success){
       this.flashMessage.show("Consultation has been recorded successfully !",{
         cssClass: 'alert-success',
         timeout:3000
       });
      }
      else{
       this.flashMessage.show("Something went wrong , please try again !",{
         cssClass: 'alert-danger',
         timeout:3000
       });
       this.router.navigate(['/consultants']);
      }
    });
  }

}




