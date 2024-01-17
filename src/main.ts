import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// import * as signalR from "@microsoft/signalr";
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

// const divMessages: HTMLDivElement | null = document.querySelector("#divMessages");
// const tbMessage: HTMLInputElement | null = document.querySelector("#tbMessage");
// const tbUser: HTMLInputElement | null = document.querySelector("#tbUser");
// const tbGroupName: HTMLInputElement | null = document.querySelector("#tbGroupName");
// const tbOtherUser: HTMLInputElement | null = document.querySelector("#tbOtherUser");
// const btnSend: HTMLButtonElement | null = document.querySelector("#btnSend");
// const btnAddToGroup: HTMLButtonElement | null = document.querySelector("#btnAddToGroup");
// const username = new Date().getTime();

// const connection = new signalR.HubConnectionBuilder()
//   .withUrl("https://localhost:7032/hub")
//   .build();


//   connection.start().catch((err: any) => document.write(err));
  
// connection.on("ReceiveMessageToUser", (username: string, chat_code: string, message: string) => {
//   const m = document.createElement("div");
//   m.innerHTML = `<div class="message-author">${username}</div><div> <span>${chat_code}: </span> ${message}</div>`;
//   if (divMessages != null) {
//     divMessages.appendChild(m);
//     divMessages.scrollTop = divMessages.scrollHeight;
//   }
// });

// connection.on("AddedToGroup", (message: string) => {
//   const m = document.createElement("div");
//   m.innerHTML = `<div class="message-author"> ${message}</div>`;
//   if (divMessages != null) {
//     divMessages.appendChild(m);
//     divMessages.scrollTop = divMessages.scrollHeight;
//   }
// });



// if (tbMessage != null)
//   tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
//     if (e.key === "Enter") {
//       send();
//     }
//   });

// if (btnSend != null)
//   btnSend.addEventListener("click", send);

// function send() {
//   if (tbMessage != null && tbOtherUser != null && tbUser != null)
//     connection.send("SendPrivateMessage", tbUser.value.toString(), tbOtherUser.value.toString(), tbMessage.value.toString())
//       .then(() => (tbMessage.value = ""));
// }




// if(btnAddToGroup != null)
//   btnAddToGroup.addEventListener("click", addToGroup)

// function addToGroup(){
//   if(tbGroupName != null){
//     connection.send("AddToGroup", tbGroupName.value.toString())
//   }
// }

// function send() {
//   if (tbMessage != null)
//     connection.send("new_msg", username, 3, tbMessage.value)
//       .then(() => (tbMessage.value = ""));
// }
