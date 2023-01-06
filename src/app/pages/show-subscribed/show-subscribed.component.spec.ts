import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubscribedComponent } from './show-subscribed.component';

describe('ShowSubscribedComponent', () => {
  let component: ShowSubscribedComponent;
  let fixture: ComponentFixture<ShowSubscribedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSubscribedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSubscribedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
