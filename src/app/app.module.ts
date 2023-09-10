import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './components/child/child.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TestComponent } from './components/test/test.component';
import { ParentComponent } from './components/parent/parent.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    TestComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
