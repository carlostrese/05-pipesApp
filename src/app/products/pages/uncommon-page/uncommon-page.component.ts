import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18nSelect
  public name:string ='fernando';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  }
  chageClient():void{
    this.name = 'melisa';
    this.gender = 'female';
  }

  //i18nPlural

  public clients: string[]=['maria','pedro','fernando', 'hernando','eduardo','melissa','natalia'];
  public clientsMaps ={
    '=0':'no tenemos clientes esperando',
    '=1':'no tenemos un cliente esperando',
    '=2':'tenemos 2 esperando',
    'other':'tenemos # clientes esperando',

  }
  deleteClient():void{
    this.clients.shift();
  }
}
