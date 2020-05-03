import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RlTableUiComponent } from './rl-table-ui.component';

describe('RlTableUiComponent', () => {
  let component: RlTableUiComponent;
  let fixture: ComponentFixture<RlTableUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RlTableUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RlTableUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
