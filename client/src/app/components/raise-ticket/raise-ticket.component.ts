import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-raise-ticket',
  templateUrl: './raise-ticket.component.html',
  styleUrls: ['./raise-ticket.component.css']
})
export class RaiseTicketComponent {

  complaintForm: FormGroup;

  constructor(private http: HttpClient, private route: Router) {
    this.complaintForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      complaint: new FormControl(null, Validators.required)
    })

    const jwtToken = localStorage.getItem('adminJwtToken')
    if (jwtToken) {
      this.route.navigate(['/admin/dashboard'])
    }
  }

  onSubmit(details: { complaint: string, name: string, phone: string, email: string }): void {
    const user = localStorage.getItem("userId")
    const complaint = {
      customer: user,
      complaintDetails: details.complaint,
      name:details.name,
      phone:details.phone,
      email:details.email
    }
    this.http.post('http://localhost:5100/complaints', complaint).subscribe((response) => {
      window.alert('Complained Successfully!');
      this.complaintForm.reset()
    }, error => {
      window.alert('Complaint Failed!');
      console.log(error);
    });
  }

}




