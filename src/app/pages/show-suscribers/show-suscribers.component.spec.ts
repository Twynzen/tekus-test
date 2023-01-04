import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSuscribersComponent } from './show-suscribers.component';

describe('ShowSuscribersComponent', () => {
  let component: ShowSuscribersComponent;
  let fixture: ComponentFixture<ShowSuscribersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSuscribersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSuscribersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
