let myHtml = document.querySelector(`html`);
let navBar = document.querySelector(`nav`);
let navHeight = navBar.offsetHeight; //get the height of navbar
let navStyle = window.getComputedStyle(navBar); // for compatibility with old ie... not very usefull here.
//Create an object to access value and unit of Padding or Margin to calculate
//the total height of the navBar.
const parseValue = (val) => {
  let v = parseFloat(val);
  return {
    'value': v,
    'unit': val.replace(v, '')
  }
}

let objNavPaddingB = parseValue(navStyle.paddingBottom);
let objNavPaddingT = parseValue(navStyle.paddingTop);
let navTotalHeight = objNavPaddingB.value + objNavPaddingT.value + navHeight; 

//Configure smooth effect on scroll and compensate Height of navBar for anchors
myHtml.style.scrollBehavior = `smooth`; //works only in firefox. For chrome enable "smooth scrolling" here : chrome://flags/#smooth-scrolling
myHtml.style.scrollPaddingTop = `${navTotalHeight}${objNavPaddingB.unit}`;

//Activate and configure scrollspy from bootstrap with jquery. Seems not working in edge.
document.querySelector(`body`).style.position = `relative`;
navBar.setAttribute(`id`, `navBarID`);
$('body').scrollspy({ target: '#navBarID', offset: navTotalHeight+1});