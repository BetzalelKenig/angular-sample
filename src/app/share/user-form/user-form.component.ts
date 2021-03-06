import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { UsersService } from "src/app/users.service";

@Component({
  selector: "app-user-form",
  templateUrl: "./user-form.component.html",
  styleUrls: ["./user-form.component.css"],
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  editMode = false;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    let userName = "";
    let userEmail = "";
    let userPasswrd = "";

    if (this.editMode) {
    }

    this.userForm = new FormGroup({
      name: new FormControl(userName, Validators.required),
      email: new FormControl(userEmail, [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl(userPasswrd, [
        Validators.required,
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/),
      ]), // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number
      accept: new FormControl(false, Validators.requiredTrue),
    });
  }

  onSubmit() {
    this.usersService.addUser({
      name: this.userForm.value.name,
      email: this.userForm.value.email,
      password: this.userForm.value.password,
    });
    this.userForm.reset();
  }
}
