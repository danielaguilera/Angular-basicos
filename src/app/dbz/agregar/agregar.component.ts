import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  constructor(private service: DbzService) { }

  ngOnInit(): void {
  }

  @Input() nuevo: Personaje;

  // @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregar(event: Event){
    if (this.nuevo.nombre.length === 0){
      return;
    }
    this.service.agregarPersonaje(this.nuevo);
    console.log(this.nuevo);

    // this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
