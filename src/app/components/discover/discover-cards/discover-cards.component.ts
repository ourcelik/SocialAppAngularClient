import { Component, Input, OnInit, Output } from '@angular/core';
import { SystemRoomModel } from 'src/app/models/systemRoomModel';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-discover-cards',
  templateUrl: './discover-cards.component.html',
  styleUrls: ['./discover-cards.component.css']
})
export class DiscoverCardsComponent implements OnInit {

  @Input() rooms: SystemRoomModel[];
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }
  getFilterText(){
    return this.searchService.getFilterText();
  }

}
