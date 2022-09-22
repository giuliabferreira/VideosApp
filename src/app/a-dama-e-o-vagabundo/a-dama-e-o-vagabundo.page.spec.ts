import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ADamaEOVagabundoPage } from './a-dama-e-o-vagabundo.page';

describe('ADamaEOVagabundoPage', () => {
  let component: ADamaEOVagabundoPage;
  let fixture: ComponentFixture<ADamaEOVagabundoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ADamaEOVagabundoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ADamaEOVagabundoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
