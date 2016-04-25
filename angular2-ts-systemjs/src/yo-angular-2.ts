import {Component, View} from 'angular2/core';

@Component({
  selector: 'yo-angular-2'
})

@View({
  templateUrl: 'yo-angular-2.html'
})

export class YoAngular2 {

  constructor() {
    console.info('YoAngular2 Component Mounted Successfully');
  }

}
