import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.component.html',
  styleUrls: ['./agent.component.css']
})
export class AgentComponent {
  userId: any = ''
  notifications: any[] = []
  isLoading = false

  constructor(private router: Router, private http: HttpClient) {
    const userId = localStorage.getItem("userId");

    const token = localStorage.getItem('jwtToken');
    if(!token){
      this.router.navigate(['/login'])
    }

    // this.http.get<any>(`http://localhost:5100/notifications/${userId}`).subscribe((res: any) => {
    //   this.notification = res.filter((notification: any) => notification.userId === userId);
    //   if(res){
    //     this.userId = res[0].senderId;
    //     console.log(res)
    //   }else{
    //     this.userId = null
    //   }
    // });
    this.isLoading = true
    this.http.get<any[]>(`http://localhost:5100/agent-notifications/${userId}`).subscribe((res:any) => {
      this.notifications = res.filter((notification: any) => notification.userId === userId);
        if(res){
          this.isLoading = false
          this.userId = res[0].senderId;
        }else{
          this.userId = null
        }
    })
    
  }

}
