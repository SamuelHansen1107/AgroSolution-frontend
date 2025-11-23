import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardMaquina } from './card-maquina/card-maquina';
import { NgFor } from '@angular/common';
import { Maquina } from './card-maquina/maquina';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CardMaquina, NgFor],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home 
{
  maquinas : Maquina [] = [];
  constructor(private httpClient : HttpClient) {}
  ngOnInit(): void {
    this.httpClient.get<Maquina[]>('/api/maquinas').subscribe((maquinas) => this.maquinas = maquinas);
  }
}
