import { Routes } from '@angular/router';
/*import { PdfViewerComponent } from './ngx-extended-pdf-viewer/ngx-extended-pdf-viewer.component';
import { TurnjsComponent } from './turnjs/turnjs.component';
import { PdfjsComponent } from './pdfjs/pdfjs.component';
import { StPageFlipComponent } from './st-page-flip/st-page-flip.component';*/
import { DearflipComponent } from './dearflip/dearflip.component';

export const routes: Routes = [
  {
    path: '',
    component: DearflipComponent,
  },

  /*{
    path: 'ngx-extended-pdf-viewer',
    component: PdfViewerComponent,
  },*/
];
