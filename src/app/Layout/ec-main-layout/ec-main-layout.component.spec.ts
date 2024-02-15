import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcMainLayoutComponent } from './ec-main-layout.component';

describe('EcMainLayoutComponent', () => {
  let component: EcMainLayoutComponent;
  let fixture: ComponentFixture<EcMainLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcMainLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
