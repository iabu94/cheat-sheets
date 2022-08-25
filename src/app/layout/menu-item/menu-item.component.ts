import { Component, Input } from '@angular/core';
import { Menu } from 'src/app/models';

@Component({
  selector: 'dh-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {
  @Input() menu: Menu = [];
}
