import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InexComponent } from './inex.component';

describe('InexComponent', () => {
  let component: InexComponent;
  let fixture: ComponentFixture<InexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
