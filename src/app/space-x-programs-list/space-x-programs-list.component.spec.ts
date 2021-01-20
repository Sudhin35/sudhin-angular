import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceXProgramsListComponent } from './space-x-programs-list.component';

describe('SpaceXProgramsListComponent', () => {
  let component: SpaceXProgramsListComponent;
  let fixture: ComponentFixture<SpaceXProgramsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceXProgramsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceXProgramsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
