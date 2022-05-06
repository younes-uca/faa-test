import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router,private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

  redirectAdmin(){
    this.router.navigate(['/admin/login']);
  }
  redirectChercheur(){
    this.router.navigate(['/chercheur/login']);
  }
  redirectRoot(){
    this.router.navigate(['/root/login']);
  }
  redirectPilote(){
    this.router.navigate(['/pilote/login']);
  }
}
