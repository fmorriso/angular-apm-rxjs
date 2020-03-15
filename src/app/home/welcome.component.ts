import { Component, OnInit, VERSION } from '@angular/core';
import { MaterialVersionInformationService } from '../shared/material-version-information.service';

@Component({
  selector: 'pm-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  title = 'angular-apm-rxjs';
  public get pageTitle() {
    return 'Welcome';
  }

  public get ngVersion(): string {
    return VERSION.full;
  }

  public get materialVersion(): string {
    return this.matVersionService.version.full;
  }

  constructor(private matVersionService: MaterialVersionInformationService) {}

  ngOnInit(): void {}
}
