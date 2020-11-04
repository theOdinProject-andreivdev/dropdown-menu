export default class DropDownItem {
  constructor(_element) {
    this.element = _element;
    this.hide();
  }

  hide() {
    this.element.style.display = "none";
  }

  show() {
    this.element.style.display = "flex";
  }
}
