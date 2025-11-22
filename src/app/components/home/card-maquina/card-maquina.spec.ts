import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaquina } from './card-maquina';

describe('CardMaquina', () => {
  let component: CardMaquina;
  let fixture: ComponentFixture<CardMaquina>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardMaquina]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMaquina);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
