import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpenerComponent } from './card-opener.component';

describe('CardOpenerComponent', () => {
  let component: CardOpenerComponent;
  let fixture: ComponentFixture<CardOpenerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOpenerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardOpenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
