import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  seletedImage = 'book1.jpg'
  images = ['book1.jpg', 'book2.png', 'book3.png', 'book4.png', 'book5.png']
  onSelectImg(img: string) {
    this.seletedImage = img
  }
}
