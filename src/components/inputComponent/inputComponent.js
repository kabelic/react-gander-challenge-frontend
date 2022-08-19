import React from 'react'
import './inputComponent.css'

const InputComponent = (props) => {
    return(
        <div>
            <input className='inputStyle' placeholder={props.placeholder} type="number" onChange={props.getNumber}/>
        </div>
    )
}

export default InputComponent