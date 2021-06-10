import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  selectedIndex: number = 4;
  headerItems = ['HOME','OUR WORK', 'ABOUT US', 'CONTACT US', 'SPECIALS'];
  constructor() { }

  ngOnInit(): void {
  }

  changeClass(index: any) {
    this.selectedIndex = index;
  }

}
