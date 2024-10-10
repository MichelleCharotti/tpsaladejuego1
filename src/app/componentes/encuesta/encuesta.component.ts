import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { EncuestaService } from '../../servicios/encuesta.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [RouterLink,RouterModule,RouterOutlet,RouterLinkActive,CommonModule,FormsModule,ReactiveFormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.scss'
})
export class EncuestaComponent implements OnInit{
  public formRepartidor: FormGroup;
  encuestado={
    apellido:"0",
    nombre:"",
    edad:0,
    numero:0,
    rango:0,
    genero:"",
    conforme:false
  }

  constructor(private encuestasService : EncuestaService, private fb:FormBuilder){
      this.formRepartidor = this.fb.group(
        {
        'apellido': ['',  Validators.required],
        'nombre': ['', Validators.required],
        'edad': ['',  Validators.required,Validators.min(18),Validators.max(99)],
        'numero': ['', Validators.required,Validators.maxLength(10)],
        'rango': ['', Validators.required],
        'genero': ['', Validators.required],
        'conforme': ['', Validators.required],
        });
  }

  ngOnInit() 
  {}
  get numeroGet(){
    return this.formRepartidor.get('numero');
  }
  get edadGet(){
    return this.formRepartidor.get('edad');
  }

  enviar()
  {
    this.formRepartidor.markAllAsTouched();
      this.encuestado.apellido=this.formRepartidor.get('apellido')?.value;
      this.encuestado.nombre=this.formRepartidor.get('nombre')?.value;
      this.encuestado.edad=this.formRepartidor.get('edad')?.value;
      this.encuestado.numero=this.formRepartidor.get('numero')?.value;
      // this.encuestado.rango=this.formRepartidor.get('rango')?.value;
      this.encuestado.genero=this.formRepartidor.get('genero')?.value;
      this.encuestado.conforme=this.formRepartidor.get('conforme')?.value;

      this.encuestasService.agregarEncuesta(this.encuestado);
    
  }
}
