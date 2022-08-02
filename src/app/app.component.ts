import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'banking';

  login=false;

   constructor(private router:Router){}

  onLogin(){
    console.log("hide");
    this.login=true;
    this.router.navigate(['/login']);

  }
}
