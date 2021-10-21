import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChannelCardsComponent } from './sub-channel-cards.component';

describe('SubChannelCardsComponent', () => {
  let component: SubChannelCardsComponent;
  let fixture: ComponentFixture<SubChannelCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubChannelCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChannelCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
