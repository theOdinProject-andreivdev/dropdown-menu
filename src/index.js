import DropDownMenu from "./dropDownMenu";
import DropDownItem from "./dropDownItem";

let dropDownMenuElement = document.querySelector(".dropDownMenu");
let dropDownMenu = new DropDownMenu(dropDownMenuElement);

let dropDownItemElements = document.querySelectorAll(".dropDownItem");

dropDownItemElements.forEach((element) => {
  let item = new DropDownItem(element);
  dropDownMenu.addItem(item);
});
