import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';
import { Observable} from 'rxjs';
import { map, take } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'app';
	isLoggedIn$: Observable<boolean>;

	constructor(private router: Router, private authService: AuthService){
		
	}

	ngOnInit() {
		this.isLoggedIn$ = this.authService.isLoggedIn;
		this.authService.isLoggedIn.subscribe((isLoggedIn:boolean)=>{
				// console.log("isLoggedin", isLoggedIn)
			if (!isLoggedIn) {
				this.router.navigate(['/login']);
			}
		})
	}

}
