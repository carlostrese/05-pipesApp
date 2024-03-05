import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

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

  //keyValue pipe
  public person = {
    name: 'fernando',
    age: 36,
    adress: 'ottawa, cas'
  }
  //async pipe
  public myObservableTimer = interval(200).pipe(
    tap(value => console.log('tap', value))
  );


  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('tenemos data en la promesa');
    }, 3500);
  });

}
