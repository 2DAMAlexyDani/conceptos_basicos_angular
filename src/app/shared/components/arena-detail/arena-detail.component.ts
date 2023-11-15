import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Arena } from 'src/app/core/Interfaces/arenas';

@Component({
  selector: 'app-arena-detail',
  templateUrl: './arena-detail.component.html',
  styleUrls: ['./arena-detail.component.scss'],
})
export class ArenaDetailComponent  implements OnInit {

  form:FormGroup;
  @Input() mode:'New'|'Edit' = 'New';
  @Input() set arena(_arena:Arena|null){
    if (_arena){
      this.form.controls['id'].setValue(_arena.id);
      this.form.controls['name'].setValue(_arena.name);
      this.form.controls['trofeos'].setValue(_arena.trofeos);
      this.form.controls['img'as string].setValue(_arena.img);
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
      trofeos:[null, [Validators.required]]
    })
  }

  ngOnInit() {}

  onCancel(){
    this._modal.dismiss(null, 'cancel');
  }

  onSubmit(){
    this._modal.dismiss(this.form.value, 'newarena');
  }

  onDelete(){
    this._modal.dismiss(this.form.value, 'delete');
  }
}
