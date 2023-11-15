import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Personaje } from 'src/app/core/Interfaces/personaje';

@Component({
  selector: 'app-personaje-detail',
  templateUrl: './personaje-detail.component.html',
  styleUrls: ['./personaje-detail.component.scss'],
})
export class PersonajeDetailComponent implements OnInit {

  form:FormGroup;
  @Input() mode:'New'|'Edit' = 'New';
  @Input() set pers(_pers:Personaje|null){
    if (_pers){
      this.form.controls['id'].setValue(_pers.id);
      this.form.controls['name'].setValue(_pers.name);
      this.form.controls['calidad'].setValue(_pers.calidad);
      this.form.controls['elixir'].setValue(_pers.elixir);
      this.form.controls['hp'].setValue(_pers.hp);
      this.form.controls['damage'].setValue(_pers.damage);
      this.form.controls['arena'].setValue(_pers.arena);
      this.form.controls['img'as string].setValue(_pers.img);
    }
  }
  constructor(
    private _modal:ModalController,
    private formBuilder:FormBuilder
  ) {
    this.form = this.formBuilder.group({
      id:[null],
      img:[''],
      name:['', [Validators.required]],
      calidad:[null, [Validators.required]],
      elixir:[null, [Validators.required]],
      hp:[null, [Validators.required]],
      damage:[null, [Validators.required]],
      arena:[null, [Validators.required]],
    })
  }

  ngOnInit() {
    
  }

  onCancel(){
    this._modal.dismiss(null, 'cancel');
  }

  onSubmit(){
    this._modal.dismiss(this.form.value, 'newdata');
  }

  onDelete(){
    this._modal.dismiss(this.form.value, 'delete');
  }
}