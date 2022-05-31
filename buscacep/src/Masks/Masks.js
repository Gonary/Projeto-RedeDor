import React from "react";
import InputMask from "react-input-mask"

const InputCPF = (props) => (
    <InputMask className={props.className} mask='99999-999' value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder} name={props.name} error={props.error}/>
);

export default InputCPF