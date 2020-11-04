export default class DropDownItem {
  constructor(_element, _animation) {
    this.element = _element;
    this.animation = _animation;
    this.hide();
  }

  hide() {
    this.element.style.opacity = "0";
    this.element.classList.remove(this.animation);
  }

  show() {
    this.element.style.opacity = "1";
    this.element.classList.add(this.animation);
  }
}
