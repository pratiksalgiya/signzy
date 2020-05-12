import React from 'react';
import { connect } from 'react-redux';
import { setLiveReport } from '../store/action/roomSettings';

function LiveReport(props) {

  function handleSetLiveReport() {

    props.setLiveReport();
}

  return (
    <div>
      <div className="text-style" onClick={handleSetLiveReport}>
        Live Report
    </div>
    {props.showLiveReport&&<div>
      {props.bulbOne && <div>Bulb one is ON. Power Consumption 20%</div>}
      {props.bulbTwo && <div>Bulb two is ON. Power Consumption 20%</div>}
      {props.device && <div>Device is ON. Power Consumption 40%</div>}
    </div>}
    </div>
  );
}
const mapStateToProps = (state) => ({
  bulbOne: state.roomSettings.bulbOne,
  bulbTwo: state.roomSettings.bulbTwo,
  device: state.roomSettings.device,
  showLiveReport:state.roomSettings.showLiveReport
});

const mapDispatchToProps = dispatch => ({
  setLiveReport: () => { console.log("in setSettings"); dispatch(setLiveReport()) },
})

export default connect(mapStateToProps, mapDispatchToProps)(LiveReport);

