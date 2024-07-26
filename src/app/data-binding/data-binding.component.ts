import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule, ParentComponent],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  //string interpolation

  serverId: number = 10;
  serverStatus: string = "offline";

  getServerStatus(){
    return this.serverStatus;
  }

  //property binding

allowNewServer:boolean = false;
constructor(){
  setTimeout(()=> {
    this.allowNewServer = true;
  }, 2000)
}

//event binding
serverCreationStatus = "No server was created"
onCreateServer(){
this.serverCreationStatus = "Server was created"
}

//Two way binding
serverName = "";
onUpdateServerName(event: Event){
  this.serverName = (<HTMLInputElement>event.target).value;
}
}
