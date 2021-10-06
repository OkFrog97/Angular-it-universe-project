import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpinerUiComponent } from './spiner-ui.component';

describe('SpinerUiComponent', () => {
  let component: SpinerUiComponent;
  let fixture: ComponentFixture<SpinerUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpinerUiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
