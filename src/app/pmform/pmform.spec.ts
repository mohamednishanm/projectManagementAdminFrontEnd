import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pmform } from './pmform';

describe('Pmform', () => {
  let component: Pmform;
  let fixture: ComponentFixture<Pmform>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pmform]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pmform);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
