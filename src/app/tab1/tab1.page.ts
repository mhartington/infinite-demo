import { Component } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  onInfinite(event: any) {
    console.log('onInfinite fired');
    setTimeout(() => {
      this.items = [...this.items, ...Array(50).keys()];
      event.target.complete();
      console.log('onInfinite complete');
    }, 2000);
  }
  items = Array.from(Array(50).keys());

  constructor() {}
}
