import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtwoComponent } from './cardtwo.component';

describe('CardtwoComponent', () => {
  let component: CardtwoComponent;
  let fixture: ComponentFixture<CardtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardtwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
