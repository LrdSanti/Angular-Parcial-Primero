import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { FormularioComponent } from './formulario/formulario.component';
const routes: Routes = [

  { path: 'inicio', component: InicioComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Ruta predeterminada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
