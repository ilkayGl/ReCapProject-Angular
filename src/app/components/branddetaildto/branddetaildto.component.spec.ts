import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranddetaildtoComponent } from './branddetaildto.component';

describe('BranddetaildtoComponent', () => {
  let component: BranddetaildtoComponent;
  let fixture: ComponentFixture<BranddetaildtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranddetaildtoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranddetaildtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
