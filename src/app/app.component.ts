import { Component } from '@angular/core';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import { NavigationCancel, Event, NavigationEnd, NavigationStart, Router, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BasicAngular';
  constructor(private loadingBar: SlimLoadingBarService, private router : Router) { // loadingBar-userdefined Router=alias class like string,integer in java
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }


  private navigationInterceptor( event: Event): void {// this method whill show progress bar to user, if ihe naviagtes from one page to another i.e component
     if (event instanceof NavigationStart) {
      this.loadingBar.start();
    }
     if (event instanceof NavigationEnd) {
      this.loadingBar.complete();
    }

     if (event instanceof NavigationCancel) {
      this.loadingBar.stop();
    }
     if (event instanceof NavigationError) {
      this.loadingBar.stop();
    }
  }
    }
