import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCheckoutComponent } from './table-checkout.component';

describe('TableCheckoutComponent', () => {
  let component: TableCheckoutComponent;
  let fixture: ComponentFixture<TableCheckoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableCheckoutComponent]
    });
    fixture = TestBed.createComponent(TableCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
