import { Component, Input } from '@angular/core';
import { Maquina } from './maquina';

@Component({
  selector: 'app-card-maquina',
  standalone: true,
  imports: [],
  templateUrl: './card-maquina.html',
  styleUrl: './card-maquina.css',
})
export class CardMaquina 
{
  @Input()
  maquina : Maquina = 
  {
    nome: "",
    dataCadastro: "",
    status: false
  }
}
