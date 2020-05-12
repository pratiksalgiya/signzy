import React from 'react';
import { connect } from 'react-redux';
import { setSettings, setBulbOne, setBulbTwo, setDevice } from '../store/action/roomSettings';

function Settings(props) {

    function handleSetSettings() {
        console.log("test")
        console.log(props)
        props.setSettings();
    }

    function handleBulbOne(event) {
        console.log(event)
        debugger;
        props.setBulbOne(event.target.checked)
    }

    function handleBulbTwo(event) {
        props.setBulbTwo(event.target.checked)
    }

    function handleDevice(event) {
        props.setDevice(event.target.checked)
    }

    return (
        <div>
            <div className="text-style" onClick={handleSetSettings}>
                Settings
    </div>
            {props.showSettings &&
                <div>
                    <div>Bulb 1 <input type="checkbox" onChange={handleBulbOne} checked={props.bulbOne} /></div>
                    <div>Bulb 2 <input type="checkbox" checked={props.bulbTwo} onChange={handleBulbTwo} /></div>
                    <div>Device <input type="checkbox" checked={props.device} onChange={handleDevice} /></div>
                </div>
            }
        </div>
    );
}

const mapStateToProps = (state) => ({
    showSettings: state.roomSettings.showSettings,
    bulbOne: state.roomSettings.bulbOne,
    bulbTwo: state.roomSettings.bulbTwo,
    device: state.roomSettings.device,
});

const mapDispatchToProps = dispatch => ({
    setSettings: () => { console.log("in setSettings"); dispatch(setSettings()) },
    setBulbOne: (index) => dispatch(setBulbOne(index)),
    setBulbTwo: (index) => dispatch(setBulbTwo(index)),
    setDevice: (index) => dispatch(setDevice(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
