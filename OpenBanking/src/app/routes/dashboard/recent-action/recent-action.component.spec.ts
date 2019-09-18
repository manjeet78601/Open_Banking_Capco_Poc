import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentActionComponent } from './recent-action.component';

describe('RecentActionComponent', () => {
  let component: RecentActionComponent;
  let fixture: ComponentFixture<RecentActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
