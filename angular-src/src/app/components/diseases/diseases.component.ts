import { Component, OnInit } from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from '../../services/validate.service';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {
  DiseaseName: String;
  saltResult = [];
  medicineResult = [];
  Page:number;
  constructor(private validateService: ValidateService ,
    private flashMessage:FlashMessagesService,
    private authService: AuthService,
    private router:Router) { }

ngOnInit() {
}




onDiseaseSubmit(){
  // console.log(this.name);
    if(this.DiseaseName == undefined){
      this.DiseaseName = "";
    }
    
  const disease = {
     disease:this.DiseaseName
  }
  
 
//Search Medicine
 this.authService.searchSaltForDisease(disease).subscribe(data => {
   //console.log(data);
   if(data.success){
  //console.log("here here");
   //console.log(data.results);
    this.saltResult = data.results;
   console.log(this.saltResult);
    //console.log(this.result);
   }
   else{
    this.flashMessage.show("Something went wrong , please try again !",{
      cssClass: 'alert-danger',
      timeout:3000
    });
    this.router.navigate(['/diseases']);
   }
 });
}



loadMedicines(){
 //console.log(this.DiseaseName);
 const disease = {
  disease:this.DiseaseName
}
  this.authService.getAllMedicinesForDisease(disease).subscribe(profile => {
    this.medicineResult = profile.results;
    console.log(this.medicineResult);
  });
}

}
