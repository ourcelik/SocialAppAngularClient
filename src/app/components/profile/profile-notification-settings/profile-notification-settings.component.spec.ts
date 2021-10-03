import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNotificationSettingsComponent } from './profile-notification-settings.component';

describe('ProfileNotificationSettingsComponent', () => {
  let component: ProfileNotificationSettingsComponent;
  let fixture: ComponentFixture<ProfileNotificationSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileNotificationSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNotificationSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
