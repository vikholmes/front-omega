import { Component, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import {
    FormControl,
    FormGroupDirective,
    NgForm,
    Validators,
    FormBuilder,
    FormGroup
} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState( control: FormControl | null, form: FormGroupDirective | NgForm | null ): boolean {
        const isSubmitted = form && form.submitted;
        return !!( control && control.invalid && ( control.dirty || control.touched || isSubmitted ) );
    }
}
   
@Component( {
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
} )

export class LoginComponent implements OnInit {
    
    IniciarSesion: FormGroup;

    constructor(
        private _formBuilder: FormBuilder
    ) {
        this.IniciarSesion = this._formBuilder.group( {
            'usuario': ['', [Validators.required, Validators.minLength( 5 )]],
            'token': ['', [Validators.required, Validators.minLength( 5 )]]
        } );
    }

    matcher = new MyErrorStateMatcher();

    ngOnInit() {
    }

    ServicioIniciarSesion() {

        let postIn = this.IniciarSesion.value;
        postIn.usuario = postIn.usuario + '03';
        
    }

    ServicioPermisos() {
        
    }

}
