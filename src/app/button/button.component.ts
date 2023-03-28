import { Component, OnInit } from '@angular/core';
import { RestService } from '../services/rest.service';
import { HttpHeaders } from '@angular/common/http'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  dataMail: any = []
  data: any = []
  disabled: boolean = false
  
  server:string = "http://drive.google.com/uc?export=view&id="
  
  banner:string = `${this.server}1l5lnCB5Pfd9fALTt6XWa6i1b_JbCrJFn`
  footer:string = `${this.server}1nfG7AsGd6tRZz7v55h6ZW31mpcCaPn4l`
  icono:string = `${this.server}1Nt5DhUsP0ASFGWxN9f1Dd37VyLS1fQCU`
  logo:string = `${this.server}1bJsktBQzRSRx2eRRBXeYnqr_nUBZfihN`

  constructor(private restService: RestService) { }

  ngOnInit(): void { }

  send_mail() {    
    this.disabled = true
    this.restService.get('http://backasistenciasdev.us-east-2.elasticbeanstalk.com/api/red-salud/test2')
      .subscribe(mail => {
        this.dataMail = mail

        if (this.dataMail.data.length != 0) {
          this.data = this.dataMail.data
        } else {
          this.data = {
            coberturas: 'Servicio adicional a los beneficios del plan de salud. Válida sólo para los afiliados registrados en el plan de salud. Atención sujeta a la disponibilidad de los proveedores de la Red Médica.',
            contratante: 'MARÍA DEL PILAR VIGIL MONTALVO',
            correo: 'giovannirm.python@gmail.com',
            descripcion: '01 consulta ambulatoria gratuita en Medicina General, Pediatría y Ginecología.',
            inicio_vigencia: '23-03-22',
            num_certificado: 'PR1000A',
            plan: 'Consulta médica gratuita'
          }
        }
        this.data.contratante = this.data.contratante.split(" ")[0].charAt(0).toUpperCase() + this.data.contratante.split(" ")[0].slice(1).toLowerCase()

        let body = {
          "recipient": this.data.correo,
          "subject": `${this.data.num_certificado}_${this.data.inicio_vigencia}`,
          "body": `<!DOCTYPE html>
          <html lang="es">
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Correo responsivo</title>
            <style>
              @import url('https://fonts.cdnfonts.com/css/metropolis-2');
                
              body {
                  background-color: rgba(83, 86, 88, 255);
                  font-family: 'Metropolis', sans-serif;
              }
          
              .table_email {
                  max-width: 600px;
                  font-size: 15px;
                  padding: 10px;
                  margin: 0 auto;
                  border-collapse: collapse;
                  background-color: white;
                  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              }
              
              .td_banner_footer {
                  padding: 0
              }
              
              .img_banner_footer {
                  padding: 0;
                  display: block
              }
              
              #table_content {
                  padding: 35px 40px 20px 75px;
              }
              
              .name {
                  color: rgba(34, 113, 190);
                  font-style: italic;
                  font-weight: 900;
                  padding-left: 20px;
                  font-size: 1.4em
              }
              
              .td_lines {
                  color: rgb(104, 104, 105);
                  padding-top: 1em;
                  padding-bottom: 1em;
              }
              
              .label {
                  color: rgb(36, 116, 188);
                  font-weight: 900;
              }
              
              .red_salud {
                  color: rgb(28, 164, 132);
                  font-weight: 900;
              }
              
              .dotted_line {
                  border-top-style: dashed;
                  border-top-width: 3px;
                  border-top-color: rgba(172, 214, 254, 255);
              }
              
              .cuadro {
                  position: relative;
              }
              
              .cuadro_texto {
                  font-size: 0.8em;
                  color: rgba(34, 113, 190);
              }
              
              
              .td_condition_title {
                  color: rgb(104, 104, 105);
                  padding-bottom: 12px;
                  padding-left: 20px;
                  padding-right: 65px;
              }
              
              .td_condition_info {
                  color: rgba(34, 113, 190);
                  padding-bottom: 12px;
                  padding-left: 20px;
                  padding-right: 65px;
                  font-size: 0.85em;
              }
              
              .table_img {
                  padding-left: 35px;
                  padding-right: 30px;
                  width: 100%;
              }
              
              .logo_icon {
                  width: 7em;
              }
              
              .td_texto {
                  padding-top: 0;
                  padding-left: 0.1em;
              }
              
              @media screen and (max-width: 440px) {
                  .table_email {
                      font-size: 14px;
                      max-width: 100%;
                      width: 100%;
                      margin: 0;
                  }
              
                  #table_content {
                      padding: 20px 15px 5px 30px;
                  }
              
                  .td_condition_title {
                      padding-bottom: 5px;
                      padding-left: 0px;
                      padding-right: 0px;
                  }
              
                  .td_condition_info {
                      padding-bottom: 5px;
                      padding-left: 0px;
                      padding-right: 0px;
                  }
              
                  .table_img {
                      padding-left: 0px;
                      padding-right: 0px;
                      width: 100%;
                  }
              
                  .td_texto {
                      padding-top: 0.5em;
                      padding-left: 0.3em;
                  }
              }
            </style>
          </head>
          <body>
          
          <table class="table_email">
            <tr>
              <td class="td_banner_footer">
                <img class="img_banner_footer" src="${this.banner}" width="100%">
              </td>
            </tr>
              <tr>
                  <td id="table_content">
                      <table>
                          <tr>
                              <td class="name">Luis,</td>
                          </tr>
                          <tr>
                              <td class="td_lines">En <span class="red_salud">Global Red Salud</span> premiamos tu preferencia y confianza, por ello, por la compra de tu plan de salud cuentas con el siguiente servicio gratuito:</td>
                          </tr>
                          <tr>
                              <td class="dotted_line td_lines">
                                  <span class="label">Campaña:</span> consulta ambulatoria gratuita.
                              </td>
                          </tr>
                          <tr>
                              <td class="dotted_line td_lines">
                                  <span class="label">Descripción de la oferta del mes:</span> 01 consulta ambulatoria gratuita en Medicina General, Pediatría y Ginecología.
                              </td>
                          </tr>
                          <tr>
                              <td class="dotted_line td_lines">
                                  <span class="label">Validez de la campaña:</span> desde el día siguiente de la afiliación hasta 30 días posteriores.
                              </td>
                          </tr>
          
                          <tr>
                              <td class="table_img">
                                  <table style="width: 100%;">
                                      <tr>
                                          <td style="background-color: rgba(244,248,252,255); border-radius: 15px; width: 100%; height: 163px;">
                                              <table style="width: 100%;border-collapse: collapse;">
                                                  <tr>
                                                      <td class="logo_icon" style="vertical-align: center;">
                                                          <img style="width:100%" src="${this.icono}">
                                                      </td>
                                                      <td class="td_texto">
                                                          <span class="cuadro_texto">
                                                              Recuerda que este servicio es brindado por <strong>Health
                                                              Care Administration Red Salud S.A.C.</strong> y para su uso,
                                                              deberás comunicarte al <strong>WhatsApp 924 843 520 o a
                                                              la central telefónica (01) 445-3019 opción2.</strong>
                                                          </span>
                                                      </td>
                                                  </tr>
                                                  <tr>
                                                      <td colspan="2" style="text-align: center;">
                                                          <img src="${this.logo}">
                                                      </td>
                                                  </tr>
                                              </table>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
          
                          <tr>
                              <td class="td_condition_title"><span class="label">Condiciones de la campaña</span></td>
                          </tr>
                          <tr>
                              <td class="td_condition_info">Servicio adicional a los beneficios del plandesalud. Válida sólo para los
                              afiliados registrados en el plan de salud. Atención sujeta a la disponibilidad
                              de los proveedores de la Red Médica.</td>
                          </tr>
                      </table> 
                  </td>
              </tr>
          
              <tr>
              <td class="td_banner_footer">
                <img class="img_banner_footer" src="${this.footer}" width="100%">
              </td>
            </tr>
          </table>
          
          </body>
          </html>`
        } 
    
        console.log(body)
    
        this.restService.post('http://localhost:5000/email/send_mail', body)
          .subscribe(response => {
            this.disabled = false
            alert('mail enviado')
          })
      })
  }
}
