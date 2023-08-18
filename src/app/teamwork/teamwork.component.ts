import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-teamwork',
  templateUrl: './teamwork.component.html',
  styleUrls: ['./teamwork.component.css']
})
export class TeamworkComponent {
  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) { }
// Custom validation function for allowed roles
allowedRoles(control: AbstractControl): { [key: string]: boolean } | null {
  const allowedRoles = ["admin", "team"];
  const role = control.value;

  if (role && !allowedRoles.includes(role.toLowerCase())) {
    return { invalidRole: true };
  }
 return null;
}
ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      role: ['', [Validators.required, this.allowedRoles]]
    });
  }

  get username() {
    return this.registerForm.get('username');
  }

  get password() {
    return this.registerForm.get('password');
  }

   get role() {
    return this.registerForm.get('role');
  }
  // && this.role==='admin' && this.role=== 'developer' && this.role === 'testing' && this.role=== 'user'
 
 onSubmit(){
    alert("register success");
    if (this.registerForm.valid) {
      const registrationData = this.registerForm.value;
  
      
        this.authService.postAuth(registrationData).subscribe(res => {
          
          this.router.navigate(['/login']);
        });
      
      }
  }
}
