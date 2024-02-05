import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventService} from '../../services/event.service';
import {Event} from '../../models/event.model';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrl: './event-add.component.css'
})
export class EventAddComponent implements OnInit {
  eventForm!: FormGroup;

  constructor(private fb: FormBuilder, private eventService: EventService) {
  }

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      date: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      this.eventService.addEvent(this.eventForm.value).subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.error('Error while creating new event', error);
        }
      });
    }
  }
}
