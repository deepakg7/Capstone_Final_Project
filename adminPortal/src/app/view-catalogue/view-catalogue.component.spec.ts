import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCatalogueComponent } from './view-catalogue.component';

describe('ViewCatalogueComponent', () => {
  let component: ViewCatalogueComponent;
  let fixture: ComponentFixture<ViewCatalogueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewCatalogueComponent]
    });
    fixture = TestBed.createComponent(ViewCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
