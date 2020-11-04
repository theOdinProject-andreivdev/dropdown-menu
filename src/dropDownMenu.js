export default class DropDownMenu {
  constructor(_element) {
    this.element = _element;
    this.items = [];
    this.addHoverEvent();
  }

  addHoverEvent() {
    this.element.addEventListener(
      "mouseover",
      function () {
        this.showItems();
      }.bind(this)
    );

    this.element.addEventListener(
      "mouseout",
      function () {
        this.hideItems();
      }.bind(this)
    );
  }

  showItems() {
    this.items.forEach((item) => {
      item.show();
    });
  }

  hideItems() {
    this.items.forEach((item) => {
      item.hide();
    });
  }

  addItem(item) {
    this.items.push(item);
  }
}
