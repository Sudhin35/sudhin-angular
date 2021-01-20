import { Component, OnInit } from '@angular/core';
import { SpaceProgramService } from './services/space-program.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sudhin-angular-project';
  years = [
    { year: 2006, isSelected: false },
    { year: 2007, isSelected: false },
    { year: 2008, isSelected: false },
    { year: 2009, isSelected: false },
    { year: 2010, isSelected: false },
    { year: 2011, isSelected: false },
    { year: 2012, isSelected: false },
    { year: 2013, isSelected: false },
    { year: 2014, isSelected: false },
    { year: 2015, isSelected: false },
    { year: 2016, isSelected: false },
    { year: 2017, isSelected: false },
    { year: 2018, isSelected: false },
    { year: 2019, isSelected: false },
    { year: 2020, isSelected: false },
    { year: 2021, isSelected: false },
  ];
  successFullLaunch = [
    { data: true, isSelected: false },
    { data: false, isSelected: false },
  ];
  successFullLanding = [
    { data: true, isSelected: false },
    { data: false, isSelected: false },
  ];
  programs = [];
  selectedyear: String = '';
  selectedLaunch: String = '';
  selectedLanding: String = '';
  constructor(private spaceProgramService: SpaceProgramService) {}

  ngOnInit() {
    this.spacePrograms(
      this.selectedyear,
      this.selectedLaunch,
      this.selectedLanding
    );
  }

  clickedData(item) {
    for (let year of this.years) {
      if (year.year == item.year) {
        year.isSelected = true;
      } else {
        year.isSelected = false;
      }
    }
  }

  clickedBooleanData(item) {
    for (let boolean of this.successFullLaunch) {
      if (boolean.data == item.data) {
        boolean.isSelected = true;
      } else {
        boolean.isSelected = false;
      }
    }
  }

  clickedBooleanLandingData(item) {
    for (let boolean of this.successFullLanding) {
      if (boolean.data == item.data) {
        boolean.isSelected = true;
      } else {
        boolean.isSelected = false;
      }
    }
  }

  spacePrograms(year, launch, landing) {
    this.selectedLaunch = launch;
    this.selectedLanding = landing;
    this.programs = [];
    this.spaceProgramService.getLaunches(year, launch, landing).subscribe(
      (res: any) => {
        this.programs = res;
      },
      (error) => {}
    );
  }
}
