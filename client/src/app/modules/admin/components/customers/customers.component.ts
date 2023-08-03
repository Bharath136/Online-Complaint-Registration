import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


interface User {
  type: string;
}
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers: any[] = []
  isLoading = false;
  constructor(private http: HttpClient) {
    this.isLoading = true;
    this.http.get<User[]>('http://localhost:5100/users').subscribe((res:User[]) => {
      this.customers = res.filter((data:User) => data.type === 'user');
      this.isLoading = false
    });
  }
}
