import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProdutoDetailVariadoPage } from './produto-detail-variado.page';

describe('ProdutoDetailVariadoPage', () => {
  let component: ProdutoDetailVariadoPage;
  let fixture: ComponentFixture<ProdutoDetailVariadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoDetailVariadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutoDetailVariadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
