import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditDriverPage } from './edit-driver.page';

describe('EditDriverPage', () => {
  let component: EditDriverPage;
  let fixture: ComponentFixture<EditDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
