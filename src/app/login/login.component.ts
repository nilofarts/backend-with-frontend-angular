import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'nilo'
  password = 'nilo'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  name: string;
  constructor(private router:Router,private route:ActivatedRoute,private hardcodedService:HardcodedAuthenticationService) { }

  ngOnInit() {
  }
  login() {
    console.log(this.username);
    // if(this.username==="nilo" && this.password === 'nilo') {
      if (this.hardcodedService.authenticate(this.username,this.password)){
      this.invalidLogin = false;
       this.router.navigate(['welcome',this.username]);
      }
      else{this.invalidLogin = true}
      }

}
