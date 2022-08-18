import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  testFormGrp;
  usernamePattern = "^[a-zA-Z]*$";
  phoneNumberPattern = "^[0-9]*$";
  isSubmitted : boolean = false;

  ngOnInit() {
    this.isSubmitted = false;
    this.testFormGrp = new FormGroup({
      username : new FormControl('',[Validators.required,Validators.pattern(this.usernamePattern)]),
      email : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required]),
      phone : new FormControl('',[Validators.required,Validators.pattern(this.phoneNumberPattern)]),
      address : new FormControl('',[Validators.required]),
      })
  }

get username() {
  return this.testFormGrp.get('username');
} 

get email() {
  return this.testFormGrp.get('email');
} 

get password() {
  return this.testFormGrp.get('password');
} 

get phone() {
  return this.testFormGrp.get('phone');
} 

get address() {
  return this.testFormGrp.get('address');
} 

  onSubmit() {
    console.log(this.testFormGrp);
    console.log(this.username.valid);
    console.log(this.email.valid);
    console.log(this.phone.valid);
    console.log(this.password.valid);
    console.log(this.address.valid);
  }
}
