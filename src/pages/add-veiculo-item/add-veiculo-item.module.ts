import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddVeiculoItemPage } from './add-veiculo-item';

@NgModule({
  declarations: [
    AddVeiculoItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddVeiculoItemPage),
  ],
})
export class AddVeiculoItemPageModule {}
