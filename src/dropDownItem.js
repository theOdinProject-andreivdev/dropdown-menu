export default class DropDownItem {
  constructor(_element) {
    this.element = _element;
    this.hide();
  }

  hide() {
    this.element.style.opacity = "0";
    this.element.classList.remove("dropDownMenuItemAnimate");
  }

  show() {
    this.element.style.opacity = "1";
    this.element.classList.add("dropDownMenuItemAnimate");
    console.log("animate");
  }
}
