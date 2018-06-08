import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { validateDate } from './validators/validateDate'
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.http.get('assets/test.json')
    .subscribe(
      (data: any[]) => {
        this.list = data;        
      }
    ) 
  }

  private list = {};

  seriesMask: any[] = [/\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/, /\d/, /\d/,];
  dateMask: any[] = [/\d/, /\d/, '.', /\d/, /\d/, '.', /\d/, /\d/, /\d/, /\d/,];
  
  private form = new FormGroup({
      surname: new FormControl('', [Validators.required, Validators.pattern('^([А-Яа-яЁё]+)$')]),
      select: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required, Validators.pattern('^([А-Яа-яЁё]+)$')]),
      date: new FormControl('', [Validators.required, validateDate]),
      series: new FormControl('', [Validators.required]),
      code: new FormControl('', [Validators.required, Validators.pattern('^([0-9]+)$')]),
      organ: new FormControl('', [Validators.required, Validators.pattern(/[А-Яа-я]+/)]),
      address: new FormControl('', [Validators.required, Validators.pattern(/[А-Яа-я0-9]+/)]),
  });

  registerUser(form) {
    console.log(form);
  }

  click(fieldValue, form, fieldName){
   form.controls[fieldName].setErrors(null);
   form.controls[fieldName].setValue(fieldValue);
  };

  typeDocs = [
    {id: 'pas-0', type: 'Паспорт'},
    {id: 'pasIn-1', type: 'Загран паспорт'},
    {id: 'pasSea-2', type: 'Паспорт моряка'}
  ];
}
