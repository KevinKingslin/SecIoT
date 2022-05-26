import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NmapformComponent } from './nmapform.component';

describe('NmapformComponent', () => {
  let component: NmapformComponent;
  let fixture: ComponentFixture<NmapformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NmapformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NmapformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
