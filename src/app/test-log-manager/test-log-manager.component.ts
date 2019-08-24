import { Component, OnInit } from '@angular/core';
import { LogManagerService } from '../services/log-manager.service';

@Component({
  selector: 'app-test-log-manager',
  templateUrl: './test-log-manager.component.html',
  styleUrls: ['./test-log-manager.component.css']
})
export class TestLogManagerComponent implements OnInit {

  constructor(private logManagerService: LogManagerService) { }

  public errorMessage: string;
  public warningMessage: string;
  public informationMessage: string;
  public debugMessage: string;

  ngOnInit() { }

  public logError(): void {

    this.logManagerService.logError(this.errorMessage);

  }

  public logWarning(): void {

    this.logManagerService.logWarning(this.warningMessage);

  }

  public logInformation(): void {

    this.logManagerService.logInformation(this.informationMessage);

  }

  public logDebug(): void {

    this.logManagerService.logDebug(this.debugMessage);

  }

}
