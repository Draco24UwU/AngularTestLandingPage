import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { FeaturesComponent } from './pages/features/features.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { CatsComponent } from './pages/cats/cats.component';

export const AUTH_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workflow', component: WorkflowComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'cats', component: CatsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(AUTH_ROUTES)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
