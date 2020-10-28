import React from 'react';

const SwitchButton = (props) =>(
    <button onClick={props.click}>{props.active?"Stop":"start"}</button>
)

export default SwitchButton;