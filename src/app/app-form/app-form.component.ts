import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any) {
    console.log('you subnitted', form);
  }

}
