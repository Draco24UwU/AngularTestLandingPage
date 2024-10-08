import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthRoutingModule } from './auth.routes';
import { HomeComponent } from './pages/home/home.component';
import { ComponentsModule } from '../components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { FeaturesComponent } from './pages/features/features.component';
import { WorkflowComponent } from './pages/workflow/workflow.component';
import { PricingComponent } from './pages/pricing/pricing.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatsComponent } from './pages/cats/cats.component';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FeaturesComponent,
    WorkflowComponent,
    PricingComponent,
    TestimonialsComponent,
    CatsComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ComponentsModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
