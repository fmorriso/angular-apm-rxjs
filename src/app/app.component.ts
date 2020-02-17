import { Component, VERSION, OnInit } from '@angular/core';
import { of, from } from 'rxjs';

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

    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5]).subscribe(
      item => console.log(`resulting item .. ${item}`),
      err => console.log(`${err}`),
      () => console.log('complete')
    );

    of(...['Apple1', 'Apple2', 'Apple3']).subscribe(
      apple => console.log(`Apple was emitted ${apple}`),
      err => console.log(`${err}`),
      () => console.log('No more apples.  Go home.')
    );
  }
}
