import { Component, NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
// import { ObjectId } from 'bson';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent {
  complaints: any[] = []
  agents: any[] = []
  selectedAgent: string = ''
  isLoading = false;

  constructor(private http: HttpClient,private router: Router) {
    const token = localStorage.getItem('adminJwtToken')
    this.isLoading = true;
    if(!token){
      this.router.navigate(['/login'])
    }
    this.http.get<any[]>(`http://localhost:5100/complaints`).subscribe((res) => {
      this.complaints = res
      this.isLoading = false
    })

    this.http.get<any[]>(`http://localhost:5100/users`).subscribe((res:any[]) => {
      const response = res.filter((user) => user.type === 'agent')
      this.agents = response
    })
  }

  onSubmitStatus(id: string, status: string) {
    this.isLoading = true
    this.http.put(`http://localhost:5100/complaints/${id}/update-status`, {status:status}).subscribe((res) => {
      this.http.get<any[]>(`http://localhost:5100/complaints`).subscribe((res) => {
        this.complaints = res
        this.isLoading = false
      })
    })
  }

  onAssign(userId: String,complaint: String, agent: String, ) {
    const details = {
      customerId: userId,
      complaintId: complaint,
      agentId: agent
    };
    this.isLoading = true;
  
    this.http.post(`http://localhost:5100/agents-complaints/${complaint}`, details)
      .subscribe(response => {
        this.isLoading = false
        alert('Complaint Assigned Successful!')
      });
  
    this.selectedAgent = "";
  }
}
