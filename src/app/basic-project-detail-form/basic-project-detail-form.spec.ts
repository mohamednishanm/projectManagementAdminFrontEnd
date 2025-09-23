import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicProjectDetailForm } from './basic-project-detail-form';

describe('BasicProjectDetailForm', () => {
  let component: BasicProjectDetailForm;
  let fixture: ComponentFixture<BasicProjectDetailForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicProjectDetailForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasicProjectDetailForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
