import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-toppers',
  standalone: true,
  imports: [],
  templateUrl: './toppers.component.html',
  styleUrl: './toppers.component.css'
})
export class ToppersComponent {
  toppers = [
    {
      image: "gaurav.png",
      name: "Gaurav Budania IAS",
      info: ["Cracked IAS in the <b> age of just 22</b>",
        "Specialist in Answer writing with <b>Micro-diagrams</b> and <b> Micro-angles.</b> ",
        "He is the All India topper in GS Paper 4"]
    },
    {
      image: "aaditya.jpg",
      name: "Dr. Aaditya Sharma",
      info: ["Cracked IAS at the <b>age of 23</b>",
        "All India <b>Topper of GS 3 - Used Graphs & Charts for his advantage.</b>",
        "Specialist in <b>combining facts and figures</b> into <b>Charts</b> for Paper 3."]
    },
    {
      image: "aakriti.jpg",
      name: "Aakriti Sethi",
      info: ["Cracked IAS in her <b>First Mains</b>",
        'Master of choosing <b>"what not to write"</b> for IAS Mains Answers.',
        "<b>GS Paper 1 - Avoiding  unproductive study of history, geography etc.</b>"]
    },
    {
      image: "shubam.png",
      name: "Shubam Yadav IAS",
      info: ["Answer writing <b>specialist of GS Paper 2</b>",
        "Expert in <b>combining SC judgements and case study</b> to turn answers into <b>DEEP ANALYSIS.</b>",
        "Pro in building <b>Answer writing templates.</b>"]
    },
  ]
}
