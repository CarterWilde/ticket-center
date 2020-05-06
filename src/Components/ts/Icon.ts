import { MouseEventHandler } from "react";

export default class Icon {
  public text: string;
  public classNames?: string[];
  public clickHandler?: MouseEventHandler;

  constructor(text: string, classNames?: string[], clickHandler?: MouseEventHandler) {
    this.text = text;
    this.classNames = classNames;
    this.clickHandler = clickHandler;
  }
  /**
   * CSS Friendly className list
   * @param prefix string to be prefixed before classNames
   * @returns a string of all the classNames concatinated together that's CSS friendly
   */
  getClassNames(prefix?: string) : string {
    return prefix ? prefix : '' + (this.classNames ?
    this.classNames.map(className => { return ' ' + className })
    :null);
  }
}