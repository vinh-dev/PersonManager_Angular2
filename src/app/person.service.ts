import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from "rxjs/operators";

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Person } from './person';
import { MessageService } from "./message.service";

@Injectable()
export class PersonService {
  getLstPerson(): Observable<Person[]> {

    // TODO: send the message_after_fetching the lstPerson
    //return of(PersonES);//function to return an array of mock lstPerson as an Observable<Person[]>.
    return this.http.get<Person[]>(this.PersonesUrl)
      .pipe(
        tap(lstPerson => this.log(`fetched lstPerson`)),
        catchError(this.handleError('getLstPerson', []))
      );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }


  /** Log a PersonService message with the MessageService */
  private log(message: string) {
    this.messageService.add('Throw message: ' + message);
  }

  private PersonesUrl = 'api/lstPerson';// URL to the web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }





  getPerson(id: number): Observable<Person> {
    const url = `${this.PersonesUrl}/${id}`;
    return this.http.get<Person>(url).pipe(
      tap(_ => this.log(`fetched Person id=${id}`)),
      catchError(this.handleError<Person>(`getPerson id=${id}`))
    );
  }
  /**PUT:update the Person on the server */

  updatePerson(Person: Person): Observable<any> {
    return this.http.put(this.PersonesUrl, Person, httpOptions).pipe(
      tap(_ => this.log(` call function updatePerson id = ${Person.id}`)),
      catchError(this.handleError<any>('updatePerson'))
    );

  }

  addPerson(Person: Person): Observable<Person> {
    return this.http.post<Person>(this.PersonesUrl, Person, httpOptions).pipe(
      tap((Person: Person) => this.log(`call function addePerson id=${Person.id}`)),
      catchError(this.handleError<Person>('addPerson'))
    );
  }

  /** DELETE: delete the Person from the server */
  deletePerson(Person: Person | number): Observable<Person> {
    const id = typeof Person === 'number' ? Person : Person.id;
    const url = `${this.PersonesUrl}/${id}`;

    return this.http.delete<Person>(url, httpOptions).pipe(
      tap(_ => this.log(`call function deletePerson id=${id}`)),
      catchError(this.handleError<Person>('deletePerson'))
    );
  }


  /** GET lstPerson whose name contains search term */

  searchPersones(term: string): Observable<Person[]> {
    if (!term.trim()) {
      // if nor search term return empty Person array
      return of([]);
    }

    return this.http.get<Person[]>(`api/lstPerson/?name=${term}`).pipe(
      tap(_ => this.log(`call function searchPersones matching${term}`)),
      catchError(this.handleError<Person[]>('serchPersones', []))
    );
  }

}
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
