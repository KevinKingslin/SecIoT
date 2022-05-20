import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetasploitformComponent } from './metasploitform.component';

describe('MetasploitformComponent', () => {
  let component: MetasploitformComponent;
  let fixture: ComponentFixture<MetasploitformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetasploitformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetasploitformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
