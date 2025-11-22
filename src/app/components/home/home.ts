import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home 
{
  maquinas : Maquina [] = [];
  constructor(private httpClient: HttpClient)
  ngOnInit(): void {
    this.httpClient.get<Maquina[]>('/api/maquinas').subscribe((maquinas) => this.maquinas = maquinas);
  }
}
