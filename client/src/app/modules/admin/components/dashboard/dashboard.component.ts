import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  complaints = 0;
  customers = 0;
  agents = 0;
  isLoading = false;
  data = [
    { name: 'Complaints', count: `${this.complaints}`, routerLink: '/admin/complaints' },
    { name: 'Customers', count: `${this.customers}`, routerLink: '/admin/customers' },
    { name: 'Agents', count: `${this.agents}`, routerLink: '/admin/agents' }
  ];

  constructor(private http: HttpClient,private router: Router) {
    const token = localStorage.getItem('adminJwtToken')
    if(!token){
      this.router.navigate(['/login'])
    }
    this.isLoading = true;
    this.http.get<any[]>('http://localhost:5100/complaints').subscribe((res) => {
      this.complaints = res.length;
      this.data[0].count = `Total complaints: ${this.complaints}`;
      this.isLoading = false
    });

    this.http.get<any[]>('http://localhost:5100/users').subscribe((res: any[]) => {
      const customers = res.filter((user) => user.type === 'user');
      this.customers = customers.length;
      this.data[1].count = `Total Customers: ${this.customers}`;
    });

    this.http.get<any[]>('http://localhost:5100/users').subscribe((res: any[]) => {
      const agents = res.filter((user) => user.type === 'agent');
      this.agents = agents.length;
      this.data[2].count = `Total Agents: ${this.agents}`;
    });
  }
}
