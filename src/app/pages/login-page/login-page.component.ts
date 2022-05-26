import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public myForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', 
      Validators.compose([Validators.required, Validators.minLength(8)])
    ]
  });

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    if(this.myForm.invalid) {
      return;
    }

    const email: string = this.myForm.get('email')?.value;
    const password: string = this.myForm.get('password')?.value;

    this.authService.register(email, password)
      .subscribe(response => {
        this.authService.storeUserInfo(response);
        this.router.navigateByUrl('minha-lista')
      });
  }

}
