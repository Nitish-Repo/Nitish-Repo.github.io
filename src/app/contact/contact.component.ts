import { Component } from '@angular/core';
import { EmailService } from '../service/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  currentYear!: number;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {
    this.updateYear();
    setInterval(() => {
      this.updateYear();
    }, 1000);
  }

  updateYear(): void {
    this.currentYear = new Date().getFullYear();
  }

  onSubmit(formData: any) {
    this.emailService.send(formData);
  }
}
