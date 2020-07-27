import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontsizechanceComponent } from './fontsizechance.component';

describe('FontsizechanceComponent', () => {
  let component: FontsizechanceComponent;
  let fixture: ComponentFixture<FontsizechanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontsizechanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontsizechanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
