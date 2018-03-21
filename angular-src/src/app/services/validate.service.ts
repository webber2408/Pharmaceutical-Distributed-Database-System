import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }
  
  validateRegister(user){
    if(user.name == undefined || user.email == undefined || user.username == undefined || user.password == undefined || user.contact == undefined){
        return false;
    }
    else{
      return true;
    }
  }

  validateExperience(exp){
    if(exp.companyName == undefined || exp.experience == undefined){
        return false;
    }
    else{
      return true;
    }
  }

  validateConsultation(con){
    console.log("hello");
    console.log(con);
    if(con.consultation == undefined){
      console.log("hellf");
        return false;
    }
    else{
      console.log("hellt");
      return true;
    }
  }

  validateEmail(email){
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email)
   }
}
