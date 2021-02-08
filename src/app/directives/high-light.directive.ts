import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  // ElementRef bu directive için kullanılan elementi referans olarak alır
  // elementref ile directive kullandığımız elemente erişiriz

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.style.fontWeight = "bold";
    this.el.nativeElement.style.color = "red";
    this.el.nativeElement.style.display = "inline-block";
    this.el.nativeElement.style.minWidth = "10rem";
  }

  // Eğer directive ile etkileşime geçmek için HostListener dediğimiz angular
  // event tanımlama yöntemi ile Javascript eventlerine bağlanır
  // Angular HostListener ile JS eventlerini dinleyebiliyor.
  // mouseleave js ile yazılımı olan eventin isimlerini kullanıyoruz

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.textDecoration = "underline";
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.textDecoration = "none";
  }

}
