import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coleta-template-angular';
  radioGroup: string;
  radioOptions = ['Opção 1', 'Opção 2', 'Opção 3', 'Opção 4'];
  checkbox1 = false;
  checkbox2 = false;
  checkbox3 = false;
  select: string;
  slider: number;
}
