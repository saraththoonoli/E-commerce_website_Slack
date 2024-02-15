import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcHeadComponent } from './ec-head.component';

describe('EcHeadComponent', () => {
  let component: EcHeadComponent;
  let fixture: ComponentFixture<EcHeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcHeadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
