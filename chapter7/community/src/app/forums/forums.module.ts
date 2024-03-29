import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { ForumComponent } from './forum/forum.component';
import { ForumsComponent } from './forums/forums.component';
import { ForumsService } from './services/forums.service';
import { ThreadComponent } from './thread/thread.component';
import { ThreadsComponent } from './threads/threads.component';



const forumsRoutes: Routes = [
  { path: 'forums', component: ForumsComponent },
  {
    path: 'forums/:forum_alias',
    component: ForumComponent,
    children: [
      { path: '', component: ThreadsComponent },
      { path: ':thread_alias', component: ThreadComponent }
    ]
  }
];

@NgModule({
  declarations: [
    ForumComponent,
    ForumsComponent,
    ThreadComponent,
    ThreadsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ClarityModule.forChild(),
    // declara rota que pertence a outros modulos em vez do módulo principal
    RouterModule.forChild(forumsRoutes)
  ],
  providers: [
    ForumsService
  ]
})
export class ForumsModule { }
