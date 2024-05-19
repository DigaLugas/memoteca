import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/header/header.component';
import { FooterComponent } from './views/footer/footer.component';
import { NewThinkingComponent } from './views/thinking/new-thinking/new-thinking.component';
import { FormsModule } from '@angular/forms';
import { ListThinkComponent } from './views/thinking/list-think/list-think.component';
import { ThinkCardComponent } from './views/thinking/think-card/think-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewThinkingComponent,
    ListThinkComponent,
    ThinkCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
