import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Event} from '../models/event.model';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://localhost/server';

  constructor(private http: HttpClient) {
  }

  addEvent(event: Event): Observable<any> {
    return this.http.post(`${this.apiUrl}/create-event.php`, event);
  }

  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/get-events.php`);
  }

  getEvent(id: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/get-event.php?id=${id}`);
  }

  updateEvent(id: number, event: Event): Observable<any> {
    const eventWithUpdatedId = {...event, id};
    return this.http.post(`${this.apiUrl}/update-event.php`, eventWithUpdatedId);
  }

  deleteEvent(id: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/delete-event.php`, {id});
  }
}
