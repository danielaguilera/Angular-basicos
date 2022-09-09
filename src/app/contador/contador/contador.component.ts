import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  titulo: string = 'Contador App';
  numero: number = 10;

  avanzar(){
    this.numero += 1;
  }

  retroceder(){
    this.numero -= 1;
  }

  reset(){
    this.numero = 0;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
