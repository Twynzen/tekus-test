import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeSuscribersComponent } from './change-suscribers.component';

describe('ChangeSuscribersComponent', () => {
  let component: ChangeSuscribersComponent;
  let fixture: ComponentFixture<ChangeSuscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangeSuscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeSuscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
