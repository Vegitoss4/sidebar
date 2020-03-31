import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSidebarComponent } from './office-sidebar.component';

describe('OfficeSidebarComponent', () => {
  let component: OfficeSidebarComponent;
  let fixture: ComponentFixture<OfficeSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
