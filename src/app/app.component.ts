import { Component, VERSION, OnInit } from '@angular/core';
import { of, from } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { MaterialVersionInformationService } from './shared/material-version-information.service';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngVersion: string;

  constructor(private matVersionService: MaterialVersionInformationService) {}

  public get materialVersion(): string {
    return this.matVersionService.version.full;
  }

  ngOnInit(): void {
    this.ngVersion = VERSION.full;

    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log(`Original item: ${item}`)),
        map(item => item * 2),
        map(item => item - item / 5),
        map(item => item.toFixed(1))
      )
      .subscribe(
        item => console.log(`resulting item .. ${item}`),
        err => console.log(`${err}`),
        () => console.log('complete')
      );

    of(...['Apple1', 'Apple2', 'Apple3']).subscribe(
      apple => console.log(`Apple was emitted ${apple}`),
      err => console.log(`${err}`),
      () => console.log('No more apples.  Go home.')
    );

    of(2, 4, 6)
      .pipe(
        map(item => item * 2),
        tap(item => console.log(item)),
        take(2)
      )
      .subscribe(console.log);
  }
}
