import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
 

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.getAuth().subscribe(res => {
        const authData = res;
        const matchedUser = authData.find((user: any) => user.username === loginData.username && user.password === loginData.password  );

        if (matchedUser) {
        
          alert("Successfully logged in!");
        } else {
          alert('Invalid user');
        }
        this.router.navigate(['/projects']);
      });
    }
  }
}
