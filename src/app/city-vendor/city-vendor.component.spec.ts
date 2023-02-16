import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityVendorComponent } from './city-vendor.component';

describe('CityVendorComponent', () => {
  let component: CityVendorComponent;
  let fixture: ComponentFixture<CityVendorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CityVendorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityVendorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
