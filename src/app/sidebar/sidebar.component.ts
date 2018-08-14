import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;

  constructor(private router: Router) {
    router.events.subscribe((_: NavigationEnd) => {
      console.log(_);
      /* Checks for NavigationEnd result other than:
      * NavigationStart,
      * RoutesRecognized,
      * GuardsCheckStart,
      * ChildActivationStart,
      * ActivationStart,
      * GuardsCheckEnd,
      * ResolveStart,
      * ResolveEnd,
      * ActivationEnd,
      * ChildActivationEnd,
      * NavigationEnd,
      * Scroll
      */
      if (_ instanceof NavigationEnd) {
        this.currentUrl = _.url;
        console.log(this.currentUrl);
      }
    });
  }

  ngOnInit() {
  }

}
