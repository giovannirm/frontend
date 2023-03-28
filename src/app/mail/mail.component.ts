import { Component, OnInit, ElementRef } from '@angular/core';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.sass']
})
export class MailComponent implements OnInit {

  elRef: ElementRef
  dataMail: any = []
  data: any = []

  constructor(elRef: ElementRef, private restService: RestService) { 
    this.elRef = elRef;
  }

  ngOnInit(): void {

    this.restService.get('http://backasistenciasdev.us-east-2.elasticbeanstalk.com/api/red-salud/test2')
      .subscribe(mail => {
        this.dataMail = mail

        if (this.dataMail.data.length != 0) {
          this.data = this.dataMail.data
        } else {
          this.data = {
            coberturas: 'Servicio adicional a los beneficios del plan de salud. Válida sólo para los afiliados registrados en el plan de salud. Atención sujeta a la disponibilidad de los proveedores de la Red Médica.',
            contratante: 'MARÍA DEL PILAR VIGIL MONTALVO',
            correo: 'luisangelnav12@gmail.com',
            descripcion: '01 consulta ambulatoria gratuita en Medicina General, Pediatría y Ginecología.',
            inicio_vigencia: '23-03-22',
            num_certificado: 'PR1000A',
            plan: 'Consulta médica gratuita'
          }
        }
        this.data.contratante = this.data.contratante.split(" ")[0].charAt(0).toUpperCase() + this.data.contratante.split(" ")[0].slice(1).toLowerCase()
      })

      console.log(this.elRef)

  }

  getHtmlContent() {
    return this.elRef.nativeElement.innerHTML;
  }
}
