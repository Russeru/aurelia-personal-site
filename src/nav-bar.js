import {bindable} from 'aurelia-framework'
import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@inject(Router)
export class NavBar {
  @bindable router;
  constructor(router) {
    this.router = router;
  }
  
  //make the navbar collapse when tapping a nav item, because it doesn't do that by default for some reason
  toggle(row) {
    var toggle = $(".navbar-toggler").context.visibilityState == "visible";
    if (toggle) {
      $(".navbar-collapse").collapse('hide');
    }
    if (row != null)
      this.router.navigate(row.href);
  }
}