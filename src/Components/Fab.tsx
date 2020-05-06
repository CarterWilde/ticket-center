import React from 'react';
import './styles/Fab.css';
import Icon from './ts/Icon';
/**
 * {@link isLeft} false = Right, true = Left
 */
type FabProps = {
  icon: Icon,
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
          className={this.props.icon.getClassNames("fab-icon")}
        >
          {this.props.icon.text?<span>{this.props.icon.text}</span>:null}
        </i>
        <span className="fab-content">{this.props.content}</span>
      </div>
    );
  }
}