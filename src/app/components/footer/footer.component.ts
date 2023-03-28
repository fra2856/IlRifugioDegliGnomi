import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  // animations: [
  //   trigger('fadeIn', [
  //     transition(':enter', [
  //       style({ opacity: 0 }),
  //       animate('200ms ease-in', style({ opacity: 1 })),
  //     ]),
  //     transition(':leave', [
  //       style({ opacity: 1 }),
  //       animate('200ms ease-out', style({ opacity: 0 })),
  //     ]),
  //   ]),
  // ],
})
export class FooterComponent {

  @Input() opacity: number;

  public icons = [
    {
      name: "Whatsapp",
      icon: "whatsapp",
      color: "light",
      link: "https://www.whatsapp.com/"
    },
    {
      name: "Instagram",
      icon: "instagram",
      color: "light",
      link: "https://www.instagram.com/"
    },
    {
      name: "Facebook",
      icon: "facebook",
      color: "light",
      link: "https://www.facebook.com/"
    },

  ]

  constructor() {
  }



}
