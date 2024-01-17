import { Component, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {
  name: string | null
  user_name: string
  other_user: string
  written_msg: string
  msgsList: any = []
  @ViewChild('msgsContainer') private msgsContainer: ElementRef;
  constructor(private route: ActivatedRoute, private hub: HubService) {
    //this.hub.sendPrivateMsgListner()
    this.hub.hubConnection.on("ReceiveMessageToUser", (userName: string, targetConnectionId: string, message: string) => {
      //console.log(message)
      this.msgsList.push({
        value: message,
        user: targetConnectionId,
        user_name: userName,
        current: false
      })
      this.msgsContainer.nativeElement.scrollTop = this.msgsContainer.nativeElement.scrollHeight;

    });
    this.route.paramMap.subscribe(params => {
      this.name = params.get("name")
    });
  }

  sendNewMsg(){
    if(this.written_msg == null || this.written_msg == '')
      return
    this.msgsList.push({
      value: this.written_msg,
      user: 1,
      user_name: this.user_name,
      current: true
    })
    this.hub.sendPrivateMsg(this.user_name, this.other_user, this.written_msg)
    this.written_msg = ''
    this.msgsContainer.nativeElement.scrollTop = this.msgsContainer.nativeElement.scrollHeight;
  }
  connect(){

  }
}
