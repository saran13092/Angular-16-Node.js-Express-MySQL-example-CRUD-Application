import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdComponent } from './get-by-id.component';

describe('GetByIdComponent', () => {
  let component: GetByIdComponent;
  let fixture: ComponentFixture<GetByIdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GetByIdComponent]
    });
    fixture = TestBed.createComponent(GetByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
