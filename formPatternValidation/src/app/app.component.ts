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
  ngOnInit() {
    this.testFormGrp = new FormGroup({
      username : new FormControl('',[
        Validators.required,Validators.pattern(this.usernamePattern)])
    })
  }

get username() {
  return this.testFormGrp.get('username');
} 

  onSubmit() {
    console.log(this.username.valid);
  }
}
