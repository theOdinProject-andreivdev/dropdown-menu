(()=>{"use strict";class e{constructor(e){this.element=e,this.hide()}hide(){this.element.style.display="none"}show(){this.element.style.display="flex"}}let t=document.querySelector(".dropDownMenu"),s=new class{constructor(e){this.element=e,this.items=[],this.addHoverEvent()}addHoverEvent(){this.element.addEventListener("mouseover",function(){this.showItems()}.bind(this)),this.element.addEventListener("mouseout",function(){this.hideItems()}.bind(this))}showItems(){this.items.forEach((e=>{e.show()}))}hideItems(){this.items.forEach((e=>{e.hide()}))}addItem(e){this.items.push(e)}}(t);document.querySelectorAll(".dropDownItem").forEach((t=>{let i=new e(t);s.addItem(i)}))})();