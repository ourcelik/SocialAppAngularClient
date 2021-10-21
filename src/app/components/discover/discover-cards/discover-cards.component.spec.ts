import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoverCardsComponent } from './discover-cards.component';

describe('DiscoverCardsComponent', () => {
  let component: DiscoverCardsComponent;
  let fixture: ComponentFixture<DiscoverCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscoverCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoverCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
