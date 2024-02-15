import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcProductDetailsComponent } from './ec-product-details.component';

describe('EcProductDetailsComponent', () => {
  let component: EcProductDetailsComponent;
  let fixture: ComponentFixture<EcProductDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcProductDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
