import React from 'react';

import {useSelector} from "react-redux";
import {selectors} from "@store/game";
import moment from "moment";

const DidntStartGame = (): JSX.Element => {
  const didntStartGameData = useSelector(selectors.didntStartGameData);
  if (!didntStartGameData) {
    return <>ups</>;
  }

  return (
    <div>
      Quiz: {didntStartGameData.name}<br/>
      Temat: {didntStartGameData.subject}<br/>
      Quiz rozpocznie się o godzinie: {moment(didntStartGameData.startTime).format('HH:mm')} <br/>
    </div>
  );
}

export default DidntStartGame;
