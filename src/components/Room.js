import React from 'react';
import { connect } from 'react-redux';
import bulb from '../icons/bulb.jpg';
import bulbtwo from '../icons/bulbtwo.jpg';
import television from '../icons/television.jpg'

function Room(props) {
  let roomColor;
  if(props.bulbOne && !props.bulbTwo){
    roomColor="one-bulb";
  }
  if(props.bulbTwo && !props.bulbOne){
    roomColor="one-bulb";
  }
  if(props.bulbTwo && props.bulbOne){
    roomColor="both-bulbs";
  }
  return (
    <div className="room" >
       <div className={`App ${roomColor}`}>
        <img className="bulb-size" src={bulb}></img>
         <img className="bulb-size" src={bulbtwo}></img>
        </div>
        <img className="television-size" src={television}></img>
        {props.device&& <div className="television-size">TV is turned ON</div>}
    </div>
  );
}
const mapStateToProps = (state) => ({
  bulbOne: state.roomSettings.bulbOne,
  bulbTwo: state.roomSettings.bulbTwo,
  device: state.roomSettings.device,
});

export default connect(mapStateToProps, null)(Room);
