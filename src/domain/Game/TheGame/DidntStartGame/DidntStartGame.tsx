import React from 'react';

import {useSelector} from "react-redux";
import {selectors} from "@store/game";

const DidntStartGame = (): JSX.Element => {
  const didntStartGameData = useSelector(selectors.didntStartGameData);
  if (!didntStartGameData) {
    return <>ups</>;
  }
  return (
    <div>
      quiz: {didntStartGameData.name}<br/>
      temat: {didntStartGameData.subject}<br/>
      Gra rozpocznie się o godzinie:<br/>
      {didntStartGameData.startTime}
    </div>
  );
}

export default DidntStartGame;
