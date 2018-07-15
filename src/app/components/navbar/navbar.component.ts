import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth/auth.service';
// import { Observable } from 'rxjs';
import * as moment from 'moment-hijri';
import 'moment/locale/ar-sa';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	date: any;
	// isLoggedIn$: Observable<boolean>;

	constructor() { 
		let m = moment();
      	this.date = m.format('dddd Do MMMM YYYY - iDo iMMMM iYYYY ');
	}

	ngOnInit() {
		// this.isLoggedIn$ = this.authService.isLoggedIn;
	}

}
