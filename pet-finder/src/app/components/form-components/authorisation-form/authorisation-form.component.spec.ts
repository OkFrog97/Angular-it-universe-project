import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorisationFormComponent } from './authorisation-form.component';

describe('AuthorisationFormComponent', () => {
  let component: AuthorisationFormComponent;
  let fixture: ComponentFixture<AuthorisationFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorisationFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorisationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
