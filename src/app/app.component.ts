import { Component } from '@angular/core';
import notify from 'devextreme/ui/notify';
declare var DevExpress: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Person Manager';
  showAlert() {
    //DevExpress.ui.dialog.confirm('Alert message', 'Alert title');
    notify({ message: 'Anhvinh', width: 450, position: "top left"}, 1== 1 ? "success" : "error", 5000);
  }


}
