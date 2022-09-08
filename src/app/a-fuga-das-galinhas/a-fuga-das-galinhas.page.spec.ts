import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AFugaDasGalinhasPage } from './a-fuga-das-galinhas.page';

describe('AFugaDasGalinhasPage', () => {
  let component: AFugaDasGalinhasPage;
  let fixture: ComponentFixture<AFugaDasGalinhasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AFugaDasGalinhasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AFugaDasGalinhasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
