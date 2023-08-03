import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agents',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css']
})
export class AgentsComponent {
  agents: any[] = []
  isLoading = false;
  constructor(private http: HttpClient,private router: Router) {
    this.isLoading = true;
    const token = localStorage.getItem('adminJwtToken')
    if(!token){
      this.router.navigate(['/login'])
    }
    this.http.get<any[]>('http://localhost:5100/users').subscribe((res) => {
      const agents = res.filter((user) => user.type === 'agent')
      this.agents = agents
      this.isLoading = false
    });
  }
}
