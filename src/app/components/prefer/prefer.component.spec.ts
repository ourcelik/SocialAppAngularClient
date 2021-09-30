import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferComponent } from './prefer.component';

describe('PreferComponent', () => {
  let component: PreferComponent;
  let fixture: ComponentFixture<PreferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
