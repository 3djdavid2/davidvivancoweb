import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup;

  constructor(private contactService: ContactService, private router: Router) {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      asunto: new FormControl(''),
      email: new FormControl(''),
      mensaje: new FormControl(''),
    })
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.contactService.sendMessage(this.formulario.value)
      .subscribe({
        next: (res: any) => {
          console.log("ok", res)
          alert("Enviado")
          this.router.navigate(['/portafolio']);
          return false

        },
        error: (e: any) => {
          console.log(e)
        },
        complete: () => {
          console.info('completed')
        }
      })
  }




}
