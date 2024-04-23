import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { AbstractControl } from '@angular/forms';
import { ValidationErrors } from '@angular/forms';
import { ValidatorFn } from '@angular/forms';
import { forbiddenNameValidator } from 'src/shared/forbidden-name.directive';
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})

export class FormulaireComponent implements OnInit{
  formresidence!:FormGroup
  
  
 ngOnInit(): void {
     this.formresidence= new FormGroup(
      {
        id:new FormControl("",Validators.required),
        name: new FormControl("",[Validators.required,Validators.minLength(2)]),
        address: new FormControl("",[Validators.required, forbiddenNameValidator(/arctic/i),])
        
      })
 }  
 add()
 { 
    console.log(this.formresidence.value)
 }

 get name()
 {
  return this.formresidence.get("name")
 }
 

}
