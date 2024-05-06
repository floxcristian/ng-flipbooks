import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  Renderer2,
} from '@angular/core';

//import * as pdfjs from 'pdfjs-dist';
//import 'pdfjs-dist/build/pdf.worker.entry';

@Component({
  selector: 'app-pdfjs',
  standalone: true,
  imports: [],
  templateUrl: './pdfjs.component.html',
  styleUrl: './pdfjs.component.scss',
})
export class PdfjsComponent {
  @ViewChild('book') bookRef!: ElementRef;

  constructor(private renderer2: Renderer2) {}

  ngOnInit(): void {}

  async ngAfterViewInit() {
    await this.render1();
  }

  /**
   * Vaciar el contenido de los libros utilizando.
   */
  emptyBooks() {
    const books = this.bookRef.nativeElement.querySelectorAll('.book');
    for (const book of books) {
      this.renderer2.removeChild(book, book.firstChild);
    }
  }

  async render1() {
    /*const pdf = await pdfjs.getDocument('assets/docs/catalogue.pdf').promise;
    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 1.0 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      const renderContext = {
        canvasContext: context!,
        viewport,
      };

      page.render(renderContext);
      this.bookRef.nativeElement.appendChild(canvas);
    }*/
  }

  /*
  ngAfterViewInit() {
    this.renderPDF('');
  }
  renderPDF(el: any) {
   */

  /*
  el = $(el);
  pdfjs.getDocument('assets/docs/catalogue.pdf').promise.then((pdf) => {
      var pages = pdf.numPages,
        elH = el.height(),
        h, w;
      
      $(".book").empty();
      
      for(var i = 1; i <= pdf.numPages; i++) {
        (function(i) {
          pdf.getPage(i).then(function(page) {
            var viewport = page.getViewport({ scale: 1}),
              scale = elH / viewport.height,
              canvas = $("<canvas></canvas>")[0],
              $sheat = $("<div class='book-sheat'></div>"),
              $page = $("<div class='book-page'></div>");
            
            viewport = page.getViewport({ scale: scale, })
            
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            h = viewport.height;
            w = viewport.width;
  
            page.render({
              canvasContext: canvas.getContext('2d'),
              viewport: viewport
            });
            
            $page.append(canvas);
            
            if(i % 2 == 1) {
              $sheat.append($page);
              el.append($sheat);
            } else {
              el.find(".book-sheat:last").append($page);
            }
            
            if(i == pdf.numPages) {
              el.width(w * 2);
              el.css("perspective", w * 2)
              el.find(".book-sheat").height(h);
              
              if(el.find(".book-sheat:last .book-page").length == 1) {
                el.find(".book-sheat:last").append("<div class='book-page'></div>");
              }
            }
          });
        })(i);
      }
    });*/
  //}

  /*
  $(window).on("load", function(e) {
    renderPDF($(".book"));
  });*/

  /*$(window).on("resize", function(e) {
    renderPDF($(".book"));
  });*/
}
