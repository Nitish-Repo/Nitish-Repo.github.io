import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  formData: any;
  constructor(private http: HttpClient) {}

  async send(formData: any) {
    emailjs.init('BTeqrvDzyK2fesUQD');
    let response = await emailjs.send('service_xafzx9r', 'template_6vt7ash', {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    });

    console.log('Email sent:', response);
    alert('Message has been sent');
    this.formData.resetForm();
  }
  catch(error: any) {
    throw error;
  }
}
