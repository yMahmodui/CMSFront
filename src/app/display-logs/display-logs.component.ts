import { Component, OnInit } from '@angular/core';
import { LogManagerService } from '../services/log-manager.service';

@Component({
  selector: 'app-display-logs',
  templateUrl: './display-logs.component.html',
  styleUrls: ['./display-logs.component.css']
})
export class DisplayLogsComponent implements OnInit {

  constructor(private logManagerService: LogManagerService) { }

  ngOnInit() { }

  public clearErrorLogs(): void {

    this.logManagerService.clearErrorLogs();

  }

  public clearWarningLogs(): void {

    this.logManagerService.clearWarningLogs();

  }

  public clearInformationLogs(): void {

    this.logManagerService.clearInformationLogs();

  }

  public clearDebugLogs(): void {

    this.logManagerService.clearDebugLogs();

  }

}
