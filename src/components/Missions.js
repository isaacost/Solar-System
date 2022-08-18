import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import './Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missoes">
        <Title headline="Missões" />
        {
          missions.map((mission) => (<MissionCard
            key={ mission.name }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />))
        }
      </div>
    );
  }
}

export default Missions;
