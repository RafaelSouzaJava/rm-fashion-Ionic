import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VariadosPage } from './variados.page';

describe('VariadosPage', () => {
  let component: VariadosPage;
  let fixture: ComponentFixture<VariadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VariadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
