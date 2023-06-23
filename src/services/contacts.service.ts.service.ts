import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiRoutes = {
    contacts: 'https://my-json-server.typicode.com/voramahavir/contacts-mock-response/contacts'
  }
  constructor(private http: HttpClient) { }

  getContacts(): Observable<any> {
    return this.http.get(this.apiRoutes.contacts).pipe(
      catchError(this.errorHandler)
    );
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}
