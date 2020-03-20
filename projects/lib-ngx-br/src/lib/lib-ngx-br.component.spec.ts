import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibNgxBrComponent } from './lib-ngx-br.component';

describe('LibNgxBrComponent', () => {
  let component: LibNgxBrComponent;
  let fixture: ComponentFixture<LibNgxBrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibNgxBrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibNgxBrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
