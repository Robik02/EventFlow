import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;
  usernameError: boolean = false;
  passwordError: boolean = false;
  emailError: boolean = false;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.email]],
      role: ['user']
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: response => {
          console.log('Registration successful', response);
          window.location.href = '/login';
        },
        error: error => {
          console.error('Registration failed', error);
          if (error.error['username']) {
            this.usernameError = true;
          }
          if (error.error['password']) {
            this.passwordError = true;
          }
          if (error.error['email']) {
            this.emailError = true;
          }
        }
      });
    }
  }
}
