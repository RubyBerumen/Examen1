import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
<<<<<<< HEAD
import {HousingLocation } from '../housing-location';
=======
import { HousingLocation } from '../housing-location';
>>>>>>> 2afb6d0a26c6531e6190a266e02d3cd76684e035

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css']
})
<<<<<<< HEAD

=======
>>>>>>> 2afb6d0a26c6531e6190a266e02d3cd76684e035
export class HousingListComponent implements OnInit {

  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  @Output() locationSelectedEvent = new EventEmitter<HousingLocation>();

  constructor() { }

  ngOnInit(): void {
  }

  searchHousingLocations(searchText: string) {
    if (!searchText) return;
<<<<<<< HEAD
    this.results = this.locationList.filter(
      (location: HousingLocation) => location.city
        .toLowerCase()
        .includes(
            searchText.toLowerCase()
    ));
=======

    this.results = this.locationList.filter((location: any) => location.city.toLowerCase().includes(searchText.toLowerCase()));
>>>>>>> 2afb6d0a26c6531e6190a266e02d3cd76684e035
  }

  selectHousingLocation(location: HousingLocation) {
    this.locationSelectedEvent.emit(location);
<<<<<<< HEAD
  }  

}


=======
  }
}
>>>>>>> 2afb6d0a26c6531e6190a266e02d3cd76684e035
