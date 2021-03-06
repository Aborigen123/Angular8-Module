import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  appColor: string
  constructor(private router: Router, private route: ActivatedRoute, private auth: AuthService) { }

  ngOnInit() {

  }

  openCarspage(){//перехід на іншу сторінку з ts
    this.router.navigate(['/cars'], {relativeTo: this.route})//перший параметр масив, другий параметр з якоъ сторінки ми переходимо
  }

  changeAuthStatus(status: string){
   if(status === 'login'){
     this.auth.logIn();
   }else{
     this.auth.logOut();
   }
  }

}
