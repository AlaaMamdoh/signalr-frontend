import { Component, OnInit } from '@angular/core';
import { HubService } from './services/hub.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'signal2';
  constructor(private hub: HubService){

  }
  ngOnInit(): void {
    this.hub.startConnetion()
    //this.hub.addTransfereChartDataListner()
  }

  startHttpRequest(groupName: string){
    //this.hub.addToGroup(groupName)
  }

  
}
