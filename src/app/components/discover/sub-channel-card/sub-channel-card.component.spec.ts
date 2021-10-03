import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubChannelCardComponent } from './sub-channel-card.component';

describe('SubChannelCardComponent', () => {
  let component: SubChannelCardComponent;
  let fixture: ComponentFixture<SubChannelCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubChannelCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubChannelCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
