import React, { FunctionComponent } from 'react';
import './styles/TitleBar.css';

import Icon from './ts/Icon';

type TitleBarProps = {
  icons: Array<Icon>
}

const TitleBar: FunctionComponent<TitleBarProps> = (props) => {
  function displayIcons(icons: Array<Icon>){
    return icons.map(icon => {
      return (
        <div
          className={icon.getClassNames("setting")}
          onClick={icon.clickHandler}
        >{icon.text}</div>
      )
    });
  }

  return (
    <nav id="TitleBar">
      <div id="window_settings">
        {displayIcons(props.icons)}
      </div>
    </nav>
  );
}

export default TitleBar;