import {renderMapCreate, creatorCompose} from "creator"
import tagList from "tagList"

let DOMCreator = adopter => type => props => children => adopter(document.createElement(type))(props)(children);

let DOMAdopter = el => props => children => {
  for(let i in props) {
    el.setAttribute(i, children[i])
  }


  for(let i in children) {
    el.appendChild(children[i]);
  }

  return el
};

let DOMRenderMap = renderMapCreate(tagList)(creatorCompose(DOMCreator(DOMAdopter)));

export default DOM = {
  DOMCreator, DOMAdopter, DOMRenderMap
}