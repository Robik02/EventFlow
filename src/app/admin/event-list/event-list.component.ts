import {Component, OnInit} from '@angular/core';
import {EventService} from '../../services/event.service';
import {Event} from '../../models/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css'
})
export class EventListComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events: Event[]) => {
      this.events = events;
    });
  }

  deleteEvent(id: number): void {
    if (confirm("Are you sure?")) {
      this.eventService.deleteEvent(id).subscribe({
        next: () => {
          this.events = this.events.filter(event => +event.id !== id);
        },
        error: (error) => console.error('Error while removing event', error)
      });
    }
  }

  protected readonly parseInt = parseInt;

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('access_token');
  }
}
