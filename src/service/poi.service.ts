import { Injectable } from '@angular/core';
import { Vehicle } from 'models/vehicle';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from 'app/messages/message.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PoiService {

  private url = 'http://localhost:8080/api'


  constructor(private http: HttpClient, private messageService: MessageService) { }


  getVehicles(): Observable<Vehicle[]> {
    this.messageService.add('PoiService: get vehicles');
    return this.http.get<Vehicle[]>(this.url + '/vehicles').pipe(
      tap(_ => this.log('fetched vehicles')),
      catchError(this.handleError('getVehicles', []))
    );
  }


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

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

}
