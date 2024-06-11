import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  isSubmit = false;
  name: string = '';
  email: string = '';
  phone: string = '';


  onSubmit() {
    const formData = new FormData();
    formData.append("name", this.name);
    formData.append("email", this.email);
    formData.append("phone", this.phone);

    fetch("https://sheetdb.io/api/v1/56jr2liz7dlyy", {
      method: "POST",
      body: formData,
    }).then(
      response => response.json()
    ).then((html) => {
      this.isSubmit = true
      // alert('success')
    });
  }
}
