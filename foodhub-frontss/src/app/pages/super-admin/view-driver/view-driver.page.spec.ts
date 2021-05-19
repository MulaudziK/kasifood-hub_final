import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewDriverPage } from './view-driver.page';

describe('ViewDriverPage', () => {
  let component: ViewDriverPage;
  let fixture: ComponentFixture<ViewDriverPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDriverPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewDriverPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
