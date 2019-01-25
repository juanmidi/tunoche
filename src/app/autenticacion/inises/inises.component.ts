import { Component, OnInit } from '@angular/core';
import { AutenticacionService } from '../../servicios/autenticacion.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inises',
  templateUrl: './inises.component.html',
  styleUrls: ['./inises.component.css']
})

export class InisesComponent implements OnInit {

  mensaje = false;

  loginForm: FormGroup;
  userdata: any;

  constructor(private formBuilder: FormBuilder,
    private autService: AutenticacionService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [
        Validators.required,
        Validators.email
      ]
      ],
      'password': ['', [
        Validators.required,
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
        Validators.minLength(6)
      ]
      ]
    });
  }

  isAuth() {
    return this.autService.isAuthenticated();
  }


  onSubmit() {
    this.userdata = this.saveUserdata();
    this.autService.inicioSesion(this.userdata);
    setTimeout(() => {
      if (this.isAuth() === false) {
        this.mensaje = true;
      } else {
        console.log('entró');
        this.router.navigateByUrl('/inicio');
      }
    }, 2000);
  }

  signInWithTwitter() {
    this.autService.signInWithTwitter()
      .then(() => {
        this.router.navigateByUrl('/inicio');
        });
  }

  saveUserdata() {
    const saveUserdata = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get('password').value,
    };
    return saveUserdata;
  }
}
