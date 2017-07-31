import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styles: []
})
export class SuccessComponent implements OnInit {

  @Input()
  message: string;
  isVisible: boolean = true;

  constructor() { }

  ngOnInit() { }

  onClose() {
    this.message = null;
    this.isVisible = false;
  }

}
