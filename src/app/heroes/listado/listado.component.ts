import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Spiderman', 'Hulk', 'Superman', 'Black Widow', 'Capitán América'];
  heroeEliminado: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  eliminarHeroe(){
    const eliminado: string = this.heroes.shift() || '';
    this.heroeEliminado = eliminado;
  }

}
