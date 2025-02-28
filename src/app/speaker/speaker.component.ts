import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-speaker',
  standalone: false,
  templateUrl: './speaker.component.html',
  styleUrl: './speaker.component.css'
})
export class SpeakerComponent {
  
  
  
  
  isMobile: boolean = false;
  
  constructor() {
  
  this.checkScreenSize();
  
  }
  
  @HostListener('window:resize', [])
  
  onResize() {
  
  this.checkScreenSize();
  
  }
  
  checkScreenSize() {
  
  this.isMobile = window.innerWidth <= 768;
  
  }
  
  days: number = 0;
  
  hours: number = 0;
  
  minutes: number = 0;
  
  seconds: number = 0;
  
  targetDate!: Date;
  
  ngOnInit() {
  
  this.initializeCountdown();
  
  }
  
  initializeCountdown() {
  
  this.targetDate = new Date();
  
  this.targetDate.setDate(this.targetDate.getDate() + 5);
  
  this.targetDate.setHours(this.targetDate.getHours() + 23);
  
  this.targetDate.setMinutes(this.targetDate.getMinutes() + 59);
  
  this.targetDate.setSeconds(this.targetDate.getSeconds() + 35);
  
  
  
  this.updateCountdown(); 
  
  setInterval(() => this.updateCountdown(), 1000);
  
  }
  
  updateCountdown() {
  
  let now = new Date();
  
  let diff = this.targetDate.getTime() - now.getTime();
  
  
  
  if (diff < 0) {
  
    this.days = 0;
  
    this.hours = 0;
  
    this.minutes = 0;
  
    this.seconds = 0;
  
    return;
  
  }
  
  
  
  this.days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  this.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  
  this.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
  this.seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  }
  
  }

