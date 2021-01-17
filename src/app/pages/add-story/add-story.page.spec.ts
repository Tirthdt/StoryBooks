import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddStoryPage } from './add-story.page';

describe('AddStoryPage', () => {
  let component: AddStoryPage;
  let fixture: ComponentFixture<AddStoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddStoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddStoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
