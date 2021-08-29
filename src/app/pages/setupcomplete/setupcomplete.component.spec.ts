import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupcompleteComponent } from './setupcomplete.component';

describe('SetupcompleteComponent', () => {
  let component: SetupcompleteComponent;
  let fixture: ComponentFixture<SetupcompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupcompleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupcompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
