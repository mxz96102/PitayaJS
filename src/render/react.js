import React from "react";
import {renderMapCreate, creatorCompose} from "creator";
import tagList from "tagList";

let reactCreator = type => props => children => React.createElement(type, props, children);

let reactRenderMap = renderMapCreate(tagList)(creatorCompose(reactCreator));


export default React = {
  reactCreator, reactRenderMap
}
