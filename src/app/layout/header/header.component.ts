import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'dh-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();

  user: string = 'Abdullah';

  logout() {
    console.log("Logged out");
  }
}
