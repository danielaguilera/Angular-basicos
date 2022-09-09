import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  alias: string = 'IronMan';
  nombre: string = 'Tony Stark';
  edad: number = 45;

  get nombreUpperCase() {
    return this.nombre.toUpperCase();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
