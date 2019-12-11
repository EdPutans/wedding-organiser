import React, { useState } from 'react';
import './styles.scss';
import { historyProps } from '../../misc/proptypes';
import StatTile from '../../Components/StatTile/StatTile';
import colors from '../../colors.scss';

const Main = ({ history }) => {
  const [timeRemaining] = useState('X months, X days, X hours X minutes remain...');
  const { pink, blackish, white, grey, dimCopper, copper } = colors;

  return (
    <div className="Main">
      <div className="Main_tileRow">
        <StatTile
          title="Edgar + Alina"
          value={timeRemaining}
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
          borderColor={pink}
        />
        <StatTile
          title="Budget remaining"
          value="£ 15 000"
          borderColor={dimCopper}
          textColor={copper}
        />
      </div>
      <div className="Main_tileRow">
        <StatTile
          title="Guests invited"
          value="12 / 51"
          textColor={grey}
          backgroundColor={white}
          borderColor={dimCopper}
        />
      </div>
      <div className="Main_tileRow">
        <StatTile
          title="Tasks completed"
          value="29 / 171"
          backgroundColor={dimCopper}
          textColor={blackish}
        />
      </div>
    </div>
  );
};

export default Main;

Main.propTypes = {
  history: historyProps.isRequired,
};
