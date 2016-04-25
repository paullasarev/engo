import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {YoAngular2} from 'yo-angular-2';

@Component({
  selector: 'main'
})

@View({
  directives: [YoAngular2],
  template: `
    <yo-angular-2></yo-angular-2>
  `
})

class Main {

}

bootstrap(Main);
