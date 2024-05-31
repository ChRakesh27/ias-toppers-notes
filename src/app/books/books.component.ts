import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {
  data = [
    { title: 'Proceed with "Active Reading"', description: "Active reading is a process of making tiny flow charts so that you can retain 29% better" },
    { title: 'Understand the "Structure" and revise the  Repeated themes.', description: "60% of the syllabus gets covered when you revise the repeated themes." },
    { title: 'Apply "RAPID IMPLEMENTATION PRINCIPLE"', description: "Make one line summary and write continuous tests. Get your answer evaluated by a mentor. If you do not have a mentor, you can always contact us" },
  ]
}
