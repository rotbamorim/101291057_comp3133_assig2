import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupModule } from './auth/signup/signup.module';
import { LoginModule } from './auth/login/login.module';
import { AuthModule } from './auth/auth.module';
import { HeaderModule } from './header/header.module';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { HttpClientModule } from '@angular/common/http';
import { HomepageModule } from './homepage/homepage.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    SignupModule,
    LoginModule,
    AuthModule,
    ApolloModule,
    HeaderModule,
    MatToolbarModule,
    HomepageModule

  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory:(httpLink:HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri:'api/graphql'
        }),

      };
    },
    deps:[HttpLink],   
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
