import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ec-button',
  templateUrl: './ec-button.component.html',
  styleUrls: ['./ec-button.component.scss']
})
export class EcButtonComponent {
  @Input() label: string = '';
  @Input() btnClass: string = '';
  @Output() onClick: EventEmitter<any> = new EventEmitter();
}
