import { HttpRequestResult } from "../models/http-request-result";
import { LogManagerService } from "../services/log-manager.service";

export class Utility {
  public static Log<T>(
    logManagerService: LogManagerService,
    httpRequestResult: HttpRequestResult<T>
  ): void {
    console.log(httpRequestResult.error_message);
    logManagerService.logError(httpRequestResult.error_message);
  }

  public constructor() {}
}
