import { Component, OnInit } from '@angular/core';
import { DummyService } from './../../services/dummy.service';
import { GlobalRxjsService } from './../../../../core/services/global-rxjs.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels-home',
  templateUrl: './hotels-home.component.html',
  styleUrls: ['./hotels-home.component.scss']
})
export class HotelsHomeComponent implements OnInit {
  users = [];
  loading = false;
  constructor(private dummyService:DummyService,private globalRxjsService:GlobalRxjsService,private router:Router) { }

  ngOnInit(): void {
    // this.getData();

    this.globalRxjsService.getBehaviorSubject().subscribe((res: any) => {
      if (res === true) {          
        this.getData();
      }
    }) 
  }

  getData(){
    this.loading = true;
    this.dummyService.getDummyData().subscribe((res:any)=>{
      this.users = res.data;
      this.loading = false;
    })
  }

  shareUser(user:any){
    alert(`You will share ${user.first_name}`)
     this.globalRxjsService.sendSubject(user.first_name);
    // this.navigate(user.first_name)
  }
navigate(user){
  this.router.navigate(['/users'], { queryParams: { data: user } });  
}
}
