import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {

  private endPointURL = 'https://faed47pcwb7biktidlecuafuty@aegep.lambda-url.us-east-1.on.aws/';

  constructor(private http: HttpClient) {}

  sendData(name: string, email: string): Observable<NewsLetterResponse> {
    const data = {name, email};

    return this.http.post<NewsLetterResponse>(this.endPointURL, data);
  }
}
