import { AfterViewInit, Component } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  //count down timer
  months = [
    'Jan',
    'Feb',
    'Mar',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
  ];
  cDateMillisecs: any;
  tDateMillisecs: any;
  year: number = 2023;
  month: number = 6;
  currentDate: any;
  targetDate: any;
  difference: any;
  seconds: any;
  minutes: any;
  hours: any;
  days: any;
  day: number = 31;

  ngAfterViewInit() {
    this.myTimer();
  }

  myTimer() {
    this.currentDate = new Date();
    this.targetDate = new Date(2022, 10, 20);
    this.cDateMillisecs = this.currentDate.getTime();
    this.tDateMillisecs = this.targetDate.getTime();
    this.difference = this.tDateMillisecs - this.cDateMillisecs;
    this.seconds = Math.floor(this.difference / 1000);
    this.minutes = Math.floor(this.seconds / 60);
    this.hours = Math.floor(this.minutes / 60);

    this.hours %= 24;
    this.minutes %= 60;
    this.seconds %= 60;
    this.hours = this.hours < 10 ? '0' + this.hours : this.hours;
    this.minutes = this.minutes < 10 ? '0' + this.minutes : this.minutes;
    this.seconds = this.seconds < 10 ? '0' + this.seconds : this.seconds;

    console.log('Countdown to Oct 20, 2022');
    console.log(this.hours + '>>>' + this.minutes + '>>>' + this.seconds);
    setInterval(this.myTimer, 1000);
  }

  title = '';
  // constructor(private http: HttpClient) {}

  ngOnInit() {
    // const url =
    //   'https://private-anon-830247f188-carsapi1.apiary-mock.com/manufacturers';
    // this.http.get(url).subscribe((res: any) => {
    //   for (let v of res) {
    //     console.log(v.num_models);
    //   }
    // });

    var arr: string[] = ['haris', 'ali', 'hafiz'];
    for (let v of arr) {
      console.log(v);
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
