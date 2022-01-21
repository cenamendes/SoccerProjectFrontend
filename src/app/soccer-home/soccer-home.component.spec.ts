import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoccerHomeComponent } from './soccer-home.component';

describe('SoccerHomeComponent', () => {
  let component: SoccerHomeComponent;
  let fixture: ComponentFixture<SoccerHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoccerHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoccerHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
