import React from 'react';
import './Fab.css';

type FabIcon = {
  text: string,
  classNames: string[]
}

/**
 * {@link isLeft} false = Right, true = Left
 */
type FabProps = {
  icon: FabIcon,
  content: string,
  isLeft: boolean
}

export default class Fab extends React.Component<FabProps> {
  static defaultProps = {
    isLeft: false
  }
  render(){
    return (
      <div className={"fab " + (this.props.isLeft ? "left" : "right")}>
        <i
        className={"fab-icon" +
          (this.props.icon.classNames ? this.props.icon.classNames.map(
            item => { return item}
          ):null)
        }>
          {this.props.icon.text?<span>{this.props.icon.text}</span>:null}
        </i>
    <span className="fab-content">{this.props.content}</span>
      </div>
    );
  }
}