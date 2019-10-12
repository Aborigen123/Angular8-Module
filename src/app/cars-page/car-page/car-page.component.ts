import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {

 id: string;
 name: string;
 color: string;
 year: string;
 hash: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];// получення значення з cars/id а сама силка cars/2
    //мінуси цього методу того що ми забираємо параметри тільки 1 раз і якщо н-д коли ми пройшли за посиланням cars/2 і 
    //внизу будуть виведені рекомендовані машини і перейшовши по них н-д cars/3 то url зміниться а сторінка не перезагрузиться тому що ми получаємо url тільки 1 раз
    this.name = this.route.snapshot.params['name'];
    this.color = this.route.snapshot.queryParams['color'];
    this.year = this.route.snapshot.queryParams['year'];
    this.hash = this.route.snapshot.fragment;

    //спосіб №2 підписником дивитися за роутом і якщо будуть зміни то їх опрацьовувати
    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.name = params['name'];
    });
//queryParams - поле являється stream або Observable і ми можемо на нього підписатися
    this.route.queryParams.subscribe((params: Params) => {
      this.year = params['year'];
      this.color = params['color'];
    })
  }
 
  openMazdaPage(){
   this.router.navigate(['cars', 8, 'Mazda'], {
     queryParams: {
       color: 'pick',
       year: 1995
     },
     fragment: 'pic'
   })
  }
}
