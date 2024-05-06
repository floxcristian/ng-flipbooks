import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputMaskModule } from 'primeng/inputmask';
declare var $: any;

import { PageFlip, SizeType } from 'page-flip';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-turnjs',
  standalone: true,
  imports: [
    CommonModule,
    ToolbarModule,
    ButtonModule,
    ButtonGroupModule,
    TooltipModule,
    MenuModule,
    SidebarModule,
    MenubarModule,
    OverlayPanelModule,
    ImageModule,
    InputTextModule,
    InputGroupModule,
    InputGroupAddonModule,
    InputMaskModule,
  ],
  templateUrl: './turnjs.component.html',
  styleUrl: './turnjs.component.scss',
})
export class TurnjsComponent implements OnInit {
  sidebarVisible: boolean = false;
  items: MenuItem[] | undefined;
  @ViewChild('flipbook') bookRef!: ElementRef;

  pageFlip: PageFlip | null = null;
  //@ViewChild('book') book!: ElementRef<HTMLElement>;
  @ViewChild('demoBookExample') book!: ElementRef<HTMLElement>;
  totalPages: number = 0;
  pageOrientation: any;
  currentPage = 0;
  pageState: any;
  pageLabel = '';

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Descargar',
        icon: 'pi pi-download',
        command: () => {},
      },
      {
        label: 'Primera página',
        icon: 'pi pi-angle-double-left',
        command: () => {},
      },
      {
        label: 'Última página',
        icon: 'pi pi-angle-double-right',
        command: () => {},
      },
      {
        label: 'Desactivar sonido',
        icon: 'pi pi-volume-down',
        command: () => {},
      },
    ];
  }
  ngAfterViewInit() {
    this.renderStPageFlip();
    /*$('#flipbook').turn({
      width: '100%',
      height: 800, //this.platform.height() - 50,
      display: 'single',
      autoCenter: true,
    });*/

    //var flipbookEL = document.getElementById('flipbook');

    /*window.addEventListener('resize', function (e) {
	flipbookEL.style.width = '';
  flipbookEL.style.height = '';
  $(flipbookEL).turn('size', flipbookEL.clientWidth, flipbookEL.clientHeight);
});*/

    /*$(flipbookEL).turn({
      autoCenter: true,
      display: 'double',
    });*/
  }

  renderStPageFlip() {
    this.pageFlip = new PageFlip(this.book.nativeElement, {
      width: 450, // base page width
      height: 633, // base page height

      size: 'fixed' as SizeType,
      // set threshold values:
      minWidth: 315,
      maxWidth: 1000,
      minHeight: 420,
      maxHeight: 1000,

      maxShadowOpacity: 0.5, // Half shadow intensity
      showCover: true, // OK: primera y última página se muestran como tapa dura.
      drawShadow: false,
      //flippingTime: 1500,
      mobileScrollSupport: false, // disable content scrolling on mobile devices
    });
    this.pageFlip.on('flip', (e) => {
      this.currentPage = Number(e.data) + 1;
      this.pageLabel =
        this.currentPage === 1
          ? '1'
          : `${this.currentPage}-${this.currentPage + 1}`;
    });
    this.pageFlip.on('changeState', (e) => {
      this.pageState = e.data;
    });

    this.pageFlip.on('changeOrientation', (e) => {
      this.pageOrientation = e.data;
    });
    this.pageFlip.loadFromHTML(document.querySelectorAll('.page'));

    this.totalPages = this.pageFlip.getPageCount();
    this.pageOrientation = this.pageFlip.getOrientation();
  }

  previousPage(): void {
    this.pageFlip?.flipPrev();
  }

  nextPage(): void {
    this.pageFlip?.flipNext();
  }
}
