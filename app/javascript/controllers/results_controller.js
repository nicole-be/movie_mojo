import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["card", "button", "revealButton", "revealText", "overlay", "overlayFilter"]

  connect() {
    console.log("You are on the results controller with JS!")
  }

  mouseEnters(event) {
    console.log("You entered!")
    this.buttonTarget.classList.remove("d-none")
    this.revealButtonTarget.classList.remove("d-none")
    this.revealTextTarget.classList.remove("d-none")
  }

  mouseLeaves(event) {
    this.buttonTarget.classList.add("d-none")
    this.revealButtonTarget.classList.add("d-none")
    this.revealTextTarget.classList.add("d-none")
  }

  revealCard(event) {
    this.overlayFilterTarget.style.filter = "blur(0)";
    this.revealButtonTarget.classList.add("d-none");
    // this.overlayFilterTarget.classList.add("hidden");
  }

}
