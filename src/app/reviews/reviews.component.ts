import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  reviews = [
    {
      title: 'Helped me learn the "Structure" of the answer',
      description: "The General studies is so vast. I was looking for previous year question and answer notes on the internet and I found this one. This is the best hand written notes that helped me how to create structure for our answers. ",
      name: "Amit Pandey",
    },
    {
      title: 'Very helpful for beginners',
      description: "I will be attempting the exam next year. After going through the books written by Dr Gaurav sir and Akriti mam, i have confidence that even i can write UPSC Mains answers.",
      name: "Vishnu Gowda",
    },
    {
      title: 'High quality content in One book',
      description: "With this one book, i covered nearly 50% of the GS Paper 2 syllabus, that too with high quality content. I dont have to make seperate notes now.",
      name: "Nisha Jacobs",
    },
    {
      title: 'Amazing Content',
      description: "This book is written very nicely. This gives a deep insight on how IAS toppers approach a question and how I should be writing answers.",
      name: "Biswajeet das",
    },
  ]
}
