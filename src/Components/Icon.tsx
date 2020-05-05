export default class Icon{
  public text: string;
  public classNames?: string[];
  constructor(text: string, classNames?: string[]) {
    this.text = text;
    this.classNames = classNames;
  }

  getClassNames(prefix?: string) : string {
    return prefix ? prefix : '' + (this.classNames ?
    this.classNames.map(className => { return className })
    :null);
  }
}