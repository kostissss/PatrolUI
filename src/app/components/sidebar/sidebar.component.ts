import { Component, ViewChild} from '@angular/core';
import { SidebarComponent } from '@syncfusion/ej2-angular-navigations';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarMobileComponent {

  @ViewChild('sidebar') sidebar?: SidebarComponent;
  public enableGestures: boolean = false;
  public type: string = 'Push';
  public onCreated(args: any) {
    this.sidebar?.hide()
  }
  closeClick(): void {
      this.sidebar?.hide();
  };

  toggleClick():void{
    this.sidebar?.toggle();
  }
}