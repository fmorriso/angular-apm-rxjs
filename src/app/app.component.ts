import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-apm-rxjs';
  ngVersion: string;
  ngOnInit(): void {
    this.ngVersion = VERSION.full;
  }
}
