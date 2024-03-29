import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: ``
})
export class MenuComponent  implements OnInit{
  public menuItems: MenuItem[] = [];

    ngOnInit() {
      this.menuItems = [
        {
          label: 'Pipes de angular',
          icon: 'pi pi-desktop',
          items:[
            {
              label: 'textos y fechas',
              icon: 'pi pi-align-left',
              routerLink: '/'
            },
            {
              label: 'numeros',
              icon: 'pi pi-dollar',
              routerLink:'numbers'
            },
            {
              label: 'no comunes',
              icon: 'pi pi-globe',
              routerLink: 'uncommun'
            },
          ]
        },
        {
          label: 'pipes personalizados',
          icon: 'pi pi-cog',
          items:[
            {
              label: 'Custom pipes',
              icon: 'pi pi-cog',
              routerLink: 'custom'
            }
          ]
        }
    ];
    }
}

