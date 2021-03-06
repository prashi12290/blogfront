import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CreateComponent } from './create/create.component';
import { AuthService } from './auth.service';
import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { RemoveComponent } from './remove/remove.component';
import { MyblogsComponent } from './myblogs/myblogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    CategoriesComponent,
    CreateComponent,
    SignupComponent,
    RemoveComponent,
    MyblogsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path:"",component:HomeComponent},
      { path:"home",component:HomeComponent},
      {path:"about",component:AboutUsComponent},
      {path:"contact",component:ContactUsComponent},
      //{path:"register",component:RegisterComponent,canActivate:[AuthService]},
      
      /*{path:"edit/:No",component:EditComponent,canActivate:[AuthService]},
      {path:"delete/:No",component:DeleteComponent,canActivate:[AuthService]},*/
      {path:"login",component:LoginComponent},
      {path:"signup",component:SignupComponent},
      {path:"create",component:CreateComponent,canActivate:[AuthService]},
      {path:"remove",component:RemoveComponent},
      {path:"myblogs",component:MyblogsComponent}
      //{path:"**",component:NotFoundComponent}
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
