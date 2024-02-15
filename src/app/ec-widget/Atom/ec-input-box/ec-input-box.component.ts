import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-ec-input-box',
  templateUrl: './ec-input-box.component.html',
  styleUrls: ['./ec-input-box.component.scss']
})
export class EcInputBoxComponent {
  @Input() type: string = 'text';
  @Input() name: string = '';
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl('');
}
