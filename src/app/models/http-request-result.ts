export class HttpRequestResult<T> {

    public constructor() { }

    public data: T;

    public is_successful: boolean;

    public error_message: string;

    public error_type: number;
}
