import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/Services/pages.service';

@Component({
  selector: 'app-review-writing',
  templateUrl: './review-writing.component.html',
  styleUrls: ['./review-writing.component.css']
})
export class ReviewWritingComponent implements OnInit {

  rating: number = 0;
  totalStar: number = 5;
  ratingArray: number[] = [];
  rated: boolean = false;
  bookTitle: string = 'A Tale of Two Cities';
  placeholderTextarea: string = '';
  
  constructor( public pgSv: PagesService ) { }
  ngOnInit(): void {
    for (let index = 0; index < this.totalStar; index++) {
      this.ratingArray.push(index);
    }
    this.placeholderTextarea = 'Con que impresión the has quedado leyendo ' + this.bookTitle + '...';
  }
  // placeholderTextarea() {
  //   return 'Con que impresión the has quedado leyendo ' + this.bookTitle;
  // }
  hoverRating(rating: number) {
    if(!this.rated) {
      this.rating = rating;
    }
  }
  calculateRating(rating: number) {
    this.rated = true;
    this.rating = rating;
  }
  imageStatus(index: number) {
    if (this.rating >= index + 1) {
        return './../../../assets/diversos/rating-star-ed1.png';     
    } else if(!this.rated) {
        return './../../../assets/diversos/star-ed-outline-rating.png';
    }
    return null;
  }
  stageOfRate() {
    return this.rating === 1 ? 'Desfavorable' : this.rating === 2 ? 'Un poco divertida'
            : this.rating === 3 ? 'Propicia' : this.rating === 4 ? 'Vastante agradable'
            : this.rating === 5 ? 'Muy recomendable' : 'Como ha sido tu experiencia?';
  }
  resetRate() {
    if(this.rated) {
      this.rated = false;
      this.rating = 0;
    }
  }
}
