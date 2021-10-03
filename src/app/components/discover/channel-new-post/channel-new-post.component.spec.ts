import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelNewPostComponent } from './channel-new-post.component';

describe('ChannelNewPostComponent', () => {
  let component: ChannelNewPostComponent;
  let fixture: ComponentFixture<ChannelNewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelNewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelNewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
