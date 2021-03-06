import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisationPageComponent } from './authorisation-page.component';

describe('AuthorisationPageComponent', () => {
  let component: AuthorisationPageComponent;
  let fixture: ComponentFixture<AuthorisationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorisationPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
