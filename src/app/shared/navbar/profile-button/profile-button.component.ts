import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile-button',
  templateUrl: './profile-button.component.html',
  styleUrls: ['./profile-button.component.scss']
})
export class ProfileButtonComponent {

  @Input() username: string;

  @Output() logoutEvent = new EventEmitter();

  logout(): void {
    this.logoutEvent.emit();
  }
}
