import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector:'pm-start',
  templateUrl:'./star.component.html',
  styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{

  @Input()rating: number;
  starWidth: number;

  @Output() ratingClicked: EventEmitter<string> =
  new EventEmitter <string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  onClick(){
    //console.log("Rating click");
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
  }
}
