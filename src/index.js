import DropDownMenu from "./dropDownMenu";
import DropDownItem from "./dropDownItem";

let dropDownMenuElement = document.querySelector(".dropDownMenu");
let dropDownMenu = new DropDownMenu(dropDownMenuElement);

let dropDownItemElements = document.querySelectorAll(".dropDownItem");

dropDownItemElements.forEach((element) => {
  let item = new DropDownItem(element, "dropDownMenuItemAnimate");
  dropDownMenu.addItem(item);
});

//this is how you reuse it
let anotherdropDownMenuElement = document.querySelector(".anotherdropDownMenu");
let anotherdropDownMenu = new DropDownMenu(anotherdropDownMenuElement);

let anotherdropDownItemElements = document.querySelectorAll(
  ".anotherdropDownItem"
);

anotherdropDownItemElements.forEach((element) => {
  let item = new DropDownItem(element, "anotherdropDownMenuItemAnimate");
  anotherdropDownMenu.addItem(item);
});
