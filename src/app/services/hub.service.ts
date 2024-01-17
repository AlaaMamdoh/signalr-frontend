import { Injectable } from '@angular/core';
import * as signalR from "@microsoft/signalr";

@Injectable({
  providedIn: 'root'
})
export class HubService {

   hubConnection: signalR.HubConnection;
  constructor() { }

  startConnetion(){
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("https://localhost:7032/hub")
    .build();

    this.hubConnection
    .start()
    .then((c) => console.log("connection started", this.hubConnection.connectionId))
    .catch((err: any) => {
      //document.write(err)
      console.log(err)
    });
  }

  addTransfereChartDataListner = () => {
    this.hubConnection.on("AddedToGroup", (message: string) => {
      console.log(message)
    });
  }


  sendPrivateMsg(userName: string, targetConnectionId: string, message: string){
    this.hubConnection.send("SendPrivateMessage", userName, targetConnectionId, message)
  }
  sendPrivateMsgListner = () => {
    this.hubConnection.on("ReceiveMessageToUser", (userName: string, targetConnectionId: string, message: string) => {
    });
  }



  addToGroup(groupName: string){
    this.hubConnection.send("AddToGroup", groupName)
  }
}
