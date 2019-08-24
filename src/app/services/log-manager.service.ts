import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogManagerService {

  public constructor() {

    this.reset();

  }

  // private traceMessages: string[];
  private debugMessages: string[];
  private informationMessages: string[];
  private warningMessages: string[];
  private errorMessages: string[];
  // private fatalMessages: string[];

  private reset() {

    // this.traceMessages = [];
    this.debugMessages = [];
    this.informationMessages = [];
    this.warningMessages = [];
    this.errorMessages = [];
    // this.fatalMessages = [];

  }

  public logHidden(message: string): void {

    if (message === undefined) {

      return;

    }

    if (message === null) {

      return;

    }

    message = message.trim();

    if (message === '') {

      return;

    }

    console.log(message);

  }

  public logDebug(message: string): void {

    if (message === undefined) {

      return;

    }

    if (message === null) {

      return;

    }

    message = message.trim();

    if (message === '') {

      return;

    }

    // if (this.debugMessages.indexOf(message) > -1) {

    //   return;

    // }

    let currentDate: Date = new Date();

    let now =
      currentDate.getFullYear() +
      '/' +
      currentDate.getMonth() +
      '/' +
      currentDate.getDay() +
      ' - ' +
      currentDate.getHours() +
      ':' +
      currentDate.getMinutes() +
      ':' +
      currentDate.getSeconds()
      ;

    message = '[' + now + '] - ' + message;

    this.debugMessages.push(message);

  }

  public logInformation(message: string): void {

    if (message === undefined) {

      return;

    }

    if (message === null) {

      return;

    }

    message = message.trim();

    if (message === '') {

      return;

    }

    // if (this.informationMessages.indexOf(message) > -1) {

    //   return;

    // }

    this.informationMessages.push(message);

  }

  public logWarning(message: string): void {

    if (message === undefined) {

      return;

    }

    if (message === null) {

      return;

    }

    message = message.trim();

    if (message === '') {

      return;

    }

    // if (this.warningMessages.indexOf(message) > -1) {

    //   return;

    // }

    this.warningMessages.push(message);

  }

  public logError(message: string): void {

    if (message === undefined) {

      return;

    }

    if (message === null) {

      return;

    }

    message = message.trim();

    if (message === '') {

      return;

    }

    // if (this.errorMessages.indexOf(message) > -1) {

    //   return;

    // }

    this.errorMessages.push(message);

  }

  public clearDebugLogs(): void {

    this.debugMessages = [];

  }

  public clearInformationLogs(): void {

    this.informationMessages = [];

  }

  public clearWarningLogs(): void {

    this.warningMessages = [];

  }

  public clearErrorLogs(): void {

    this.errorMessages = [];

  }

  public clearAllLogs(): void {

    this.reset();

  }

  public getDebugMessages(): string[] {

    return this.debugMessages;

  }

  public getInformationMessages(): string[] {

    return this.informationMessages;

  }

  public getWarningMessages(): string[] {

    return this.warningMessages;

  }

  public getErrorMessages(): string[] {

    return this.errorMessages;

  }

}
