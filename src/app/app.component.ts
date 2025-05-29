import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { AuthService } from 'services/auth.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private http: HttpClient) {}

  ngOnInit() {
    console.log('AuthService injected : ', this.authService);
    // Test protected endpoint
    this.http.get('http://127.0.0.1:8000/api/users/user-profile').subscribe({
      next: (response) => console.log('User Profile:', response),
      error: (error) => console.error('User Profile Error:', error)
    });
  }
}