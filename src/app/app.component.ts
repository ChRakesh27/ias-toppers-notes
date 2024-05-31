import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from "./nav/nav.component";
import { HomeComponent } from "./home/home.component";
import { ToppersComponent } from "./toppers/toppers.component";
import { BooksComponent } from "./books/books.component";
import { AspirantsBooksComponent } from "./aspirants-books/aspirants-books.component";
import { AnswersCompilationComponent } from "./answers-compilation/answers-compilation.component";
import { PyqNotesComponent } from "./pyq-notes/pyq-notes.component";
import { OfferComponent } from "./offer/offer.component";
import { ReviewsComponent } from "./reviews/reviews.component";
import { ContactComponent } from "./contact/contact.component";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, NavComponent, HomeComponent, ToppersComponent, BooksComponent, AspirantsBooksComponent, AnswersCompilationComponent, PyqNotesComponent, OfferComponent, ReviewsComponent, ContactComponent]
})
export class AppComponent {
  title = 'frontend';
}
