import { Component } from '@angular/core';
import {
  NgxExtendedPdfViewerModule,
  NgxExtendedPdfViewerService,
  PdfBreakpoints,
  pdfDefaultOptions,
} from 'ngx-extended-pdf-viewer';

@Component({
  selector: 'app-ngx-extended-pdf-viewer',
  standalone: true,
  imports: [NgxExtendedPdfViewerModule],
  templateUrl: './ngx-extended-pdf-viewer.component.html',
  styleUrl: './ngx-extended-pdf-viewer.component.scss',
})
export class PdfViewerComponent {
  minZoom = 0.33;
  maxZoom = 0.5;
  _zoomSetting: number | string | undefined = 'page-width';

  get zoomSetting() {
    return String(this._zoomSetting);
  }

  /** In most cases, you don't need the NgxExtendedPdfViewerService. It allows you
   *  to use the "find" api, to extract text and images from a PDF file,
   *  to print programmatically, and to show or hide layers by a method call.
   */
  constructor(private pdfService: NgxExtendedPdfViewerService) {
    /* More likely than not you don't need to tweak the pdfDefaultOptions.
         They are a collecton of less frequently used options.
         To illustrate how they're used, here are two example settings: */
    pdfDefaultOptions.doubleTapZoomFactor = '150%'; // The default value is '200%'
    pdfDefaultOptions.maxCanvasPixels = 4096 * 4096 * 5; // The default value is 4096 * 4096 pixels,
    PdfBreakpoints.xs = 490; // unit: pixels
    PdfBreakpoints.sm = 560;
    PdfBreakpoints.md = 610;
    PdfBreakpoints.lg = 660;
    PdfBreakpoints.xl = 740;
    PdfBreakpoints.xxl = 830;
    // but most devices support much higher resolutions.
    // Increasing this setting allows your users to use higher zoom factors,
    // trading image quality for performance.
  }
}
