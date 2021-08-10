import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username!:string;
  password!:string;
  message!:any;

  constructor(private service: RestapiService, private router:Router) { }

  ngOnInit(): void {
  }

  doLogin() {
    let resp = this.service.login(this.username, this.password);

    console.log(this.username + ":"+ this.password);

    resp.subscribe(data => {
      //console.log(data);
      this.router.navigate(["/home"]);
    })
  }

}
