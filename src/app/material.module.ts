import { NgModule, Type } from '@angular/core';
import { MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';

const modules: Array<Type<any>> = [

  MatIconModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [
  ]
})
export class MaterialModule {
}
