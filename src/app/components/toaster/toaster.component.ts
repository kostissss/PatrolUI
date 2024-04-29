import { Component, OnInit } from '@angular/core';
import { Message } from '../../interfaces/message';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrl: './toaster.component.css'
})
export class ToasterComponent implements OnInit{
  constructor(private toastService:ToastService) { }

  messages: Message[] = [];
  ngOnInit() {
   this.toastService.messages$.subscribe((messages) => {
      this.messages = messages;
    });
  }

  dismiss(id:number){
    this.toastService.dismiss(id);}

}
