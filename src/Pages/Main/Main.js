import React, { useState, useEffect } from 'react';
import './styles.scss';
import { historyProps } from '../../misc/proptypes';
import StatTile from '../../Components/StatTile/StatTile';
import colors from '../../colors.scss';

const Main = ({ history }) => {
  const { pink, blackish, white, grey } = colors;
  return (
    <div className="Main">
      <div className="Main_tileRow">
        <StatTile
          title="Edgar + Alina"
          value="Time remain goes here"
          backgroundColor={grey}
          textColor={white}
        />
      </div>
      <div className="Main_tileRow">
        <StatTile
          title="Spent so far..."
          value="£ 0"
          backgroundColor={blackish}
          textColor={white}
        />
        <StatTile
          title="Budget remaining"
          value="£ 15 000"
          backgroundColor={blackish}
          textColor={pink}
        />
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  history: historyProps.isRequired,
};
