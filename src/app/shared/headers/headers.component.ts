import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuRoutes } from '../../menu/menu';
import { MenuInfoInterface } from '../../core/interface/menu-info.interface';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent implements OnInit  {
  menuItems:MenuInfoInterface[]=[];

  ngOnInit(): void {
    this.menuItems = MenuRoutes
    console.log(this.menuItems)
  }
}
