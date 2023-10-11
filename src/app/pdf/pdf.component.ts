import { Component, OnInit } from '@angular/core';
import { User } from '../Class/User';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.scss']
})


export class PdfComponent{

  createPdf(){
    const usuario = new User('Felipe alonso perez gonzalez','Ingeniero en Informatica','felipe@gmail.com','+56932443209');

    const pdfDefinition: any = {
      content: [
        {
            text: usuario.profession,style: 'defaultStyle'
        },
        {
          columns: [
            {
              width: 340,
              text: usuario.name, style: 'titleStyle'
            },
            {
              width: 220,
              ul: [
                {text: usuario.phone},
                {text: usuario.email}
              ]
            }
          ],
        }
      ],
      styles:{
        defaultStyle:{
          fontSize: 10,
          color: 'gray'
        },
        titleStyle:{
          fontSize: 24,
        }
      }
    }
    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();
  }
}
