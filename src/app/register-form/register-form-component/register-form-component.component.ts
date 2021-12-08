import { Router } from '@angular/router';
import { RegistrationService } from './../../../services/registration.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form-component',
  templateUrl: './register-form-component.component.html',
  styleUrls: ['./register-form-component.component.css']
})
export class RegisterFormComponentComponent implements OnInit {

  user: string;
  name: string;
  email: string;
  password: string;
  validatePassword: string;
  // registrationControl = new FormGroup({
  //   user: new FormControl('', [Validators.required]),
  //   name: new FormControl('', [Validators.required]),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   password: new FormControl('', [Validators.required]),
  //   registrationControl: new FormControl('', [Validators.required]),
  // });

  constructor(
    private registrationService: RegistrationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }



  submit(){
    const payload = {
      user: this.user,
      name: this.name,
      email: this.email,
      password: this.password
    }
    console.log(payload)
    this.registrationService.adminRegistration(payload).subscribe(data => {
      this.router.navigate(['/inicio/admin']);
    }, err => {
      this.router.navigate(['/erro'])
    })
  }

}
