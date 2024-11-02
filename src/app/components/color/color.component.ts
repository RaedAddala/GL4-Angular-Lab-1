import { Component, Input, OnInit, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "app-color",
    templateUrl: "./color.component.html",
    styleUrls: ["./color.component.css"],
    standalone: true,
})
export class ColorComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  @Input() defaultColor = "red";

  /**
   *
   * The color representing the Div
   */
  divColor = "";

  /** Inserted by Angular inject() migration for backwards compatibility */
  constructor(...args: unknown[]);

  /**
   * It change the div backgound color
   *
   * @param newColor: string
   */

  constructor() {
    console.log("In constructor", this.defaultColor);
  }

  ngOnInit(): void {
    console.log("In ngOnInit", this.defaultColor);
    this.divColor = this.defaultColor;
  }

  changeColor(newColor: string) {
    this.divColor = newColor;
  }
}
