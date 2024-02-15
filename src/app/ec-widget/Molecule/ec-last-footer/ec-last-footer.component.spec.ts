import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcLastFooterComponent } from './ec-last-footer.component';

describe('EcLastFooterComponent', () => {
  let component: EcLastFooterComponent;
  let fixture: ComponentFixture<EcLastFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcLastFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcLastFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
