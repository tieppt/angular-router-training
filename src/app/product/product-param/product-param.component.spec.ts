import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductParamComponent } from './product-param.component';

describe('ProductParamComponent', () => {
  let component: ProductParamComponent;
  let fixture: ComponentFixture<ProductParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
