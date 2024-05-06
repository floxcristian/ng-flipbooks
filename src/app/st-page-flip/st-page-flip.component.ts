import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PageFlip, SizeType } from 'page-flip';

@Component({
  selector: 'app-st-page-flip',
  standalone: true,
  imports: [],
  templateUrl: './st-page-flip.component.html',
  styleUrl: './st-page-flip.component.scss',
})
export class StPageFlipComponent implements OnInit {
  pageFlip: PageFlip | null = null;
  //@ViewChild('book') book!: ElementRef<HTMLElement>;
  @ViewChild('demoBookExample') book!: ElementRef<HTMLElement>;
  totalPages: number = 0;
  pageOrientation: any;
  currentPage = 0;
  pageState: any;

  ngOnInit() {
    this.onChanges();
  }

  ngAfterViewInit() {
    /*const pageFlip = new PageFlip(this.book.nativeElement, {
      width: 400, // required parameter - base page width
      height: 600, // required parameter - base page height
      showCover: true,
    });

    pageFlip.loadFromHTML(document.querySelectorAll('.my-page'));*/

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
      showCover: true,
      mobileScrollSupport: false, // disable content scrolling on mobile devices
    });
    this.pageFlip.on('flip', (e) => {
      this.currentPage = Number(e.data) + 1;
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

  onChanges() {}
}
