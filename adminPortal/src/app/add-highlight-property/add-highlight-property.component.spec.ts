import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHighlightPropertyComponent } from './add-highlight-property.component';

describe('AddHighlightPropertyComponent', () => {
  let component: AddHighlightPropertyComponent;
  let fixture: ComponentFixture<AddHighlightPropertyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddHighlightPropertyComponent]
    });
    fixture = TestBed.createComponent(AddHighlightPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
