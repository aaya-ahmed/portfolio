import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkSkillsComponent } from './work-skills.component';

describe('WorkSkillsComponent', () => {
  let component: WorkSkillsComponent;
  let fixture: ComponentFixture<WorkSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkSkillsComponent]
    });
    fixture = TestBed.createComponent(WorkSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
