import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PdfViewerComponent } from './ngx-extended-pdf-viewer/ngx-extended-pdf-viewer.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarModule,
    CommonModule,
    RouterOutlet,
    PdfViewerComponent,
    ButtonModule,
    RippleModule,
    StyleClassModule,
    InputTextModule,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-flipbook-samples';
}
