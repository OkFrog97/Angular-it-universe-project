import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinnerUiComponent } from './spinner-ui.component';

describe('SpinnerUiComponent', () => {
  let component: SpinnerUiComponent;
  let fixture: ComponentFixture<SpinnerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinnerUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
