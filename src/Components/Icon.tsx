export default class Icon{
  public text: string;
  public classNames?: string[];
  constructor(text: string, classNames?: string[]) {
    this.text = text;
    this.classNames = classNames;
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