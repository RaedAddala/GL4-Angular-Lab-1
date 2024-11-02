import { Component, Input } from "@angular/core";
import { Observable, map, startWith, timer } from "rxjs";
import { NgStyle } from "@angular/common";

@Component({
    selector: "app-slider",
    templateUrl: "./slider.component.html",
    styleUrls: ["./slider.component.css"],
    standalone: true,
    imports: [NgStyle],
})
export class SliderComponent {
  @Input() timer = 1500;
  @Input() imagePaths = [
    "as.jpg",
    "cv.png",
    "rotating_card_profile.png",
    "rotating_card_profile2.png",
    "rotating_card_profile3.png",
  ];

  /* Todo : Créer le flux permettant de générer les images à afficher dans le slider */
  paths$!: Observable<string>;
}
