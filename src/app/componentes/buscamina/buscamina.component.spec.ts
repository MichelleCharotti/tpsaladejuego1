import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaminaComponent } from './buscamina.component';

describe('BuscaminaComponent', () => {
  let component: BuscaminaComponent;
  let fixture: ComponentFixture<BuscaminaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuscaminaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscaminaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
