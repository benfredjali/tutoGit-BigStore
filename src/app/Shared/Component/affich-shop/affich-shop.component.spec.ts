import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichShopComponent } from './affich-shop.component';

describe('AffichShopComponent', () => {
  let component: AffichShopComponent;
  let fixture: ComponentFixture<AffichShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffichShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
