import { NgModule, Type } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { MatSidenavModule, MatListModule, MatIconModule, MatToolbarModule, MatButtonModule, MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';

const modules: Array<Type<any>> = [
  AngularCommonModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatAutocompleteModule,
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
