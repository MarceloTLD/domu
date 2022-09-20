/*!
* domujs -  v0.1.0
* Copyright 2022 © Karasu themes
* Developed by Marcelo (github.com/MarceloTLD)
* MIT License (//github.com/Karasu-themes/domu/blob/master/LICENSE)
*/

import create from './utils/create';
import createTree from './utils/createTree';
import insert from './utils/insert';
import remove from './utils/remove';

export default class Domu {
  constructor () {
    this.create = create;
    this.createTree = createTree;
    this.insert = insert;
    this.remove = remove;
  }
}