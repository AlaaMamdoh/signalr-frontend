import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatComponent } from './chat/chat/chat.component';

const routes: Routes = [
  { path: 'chat-list', component: ChatListComponent},
  { path: 'chat/:name', component: ChatComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
