/**
 * @author Dominic Ming
 * @file Basic render system for DOM/Virtual-DOM
 */

/**
 * Firstly, here need some Basic here
 */

/**
 * use childAdopter to append Child to an created DOM
 * @param childAdopter
 *
 * @constructor
 */

/*
let DOMCreator = childAdopter => type => props => children => type ;

let DOMAdopter = parent => children  => parent;
*/

let creatorCompose = creator => type => creator(type);

let defineFreezeKey = obj => key => value => Object.defineProperty(obj, key, {value, writable:false});

let renderObj = obj => keyList => valueGen => {
  let key = keyList.pop();

  return key ? renderObj(defineFreezeKey(obj)(key)(valueGen(key)))(keyList)(valueGen) : obj;
};


let renderMapCreate = list => creator => renderObj({})(list)(creator);

// example : let DOMRenderMap = renderMapCreate(tagList)(creatorCompose(DOMCreator));

module.exports = exports = Creator = {
  renderMapCreate, creatorCompose
};