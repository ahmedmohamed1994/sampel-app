import { Component, OnInit } from '@angular/core';
import { GlobalRxjsService } from './../../../../core/services/global-rxjs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private globalRxjsService:GlobalRxjsService,private route: ActivatedRoute) {
  
   }

  ngOnInit(): void {
    this.globalRxjsService.getSubject().subscribe((data:any)=>{
      console.warn(data);
    })
    // console.log( this.route.snapshot.queryParams);
    
  }

}
