import React from 'react'

const Buttons = ({ filter, category }) => {
    return (
    <div className="btns">
 {
            category.map((v, i) => (

                <button type='button' onClick={() => filter(v)}>{v}</button>
            ))
        }
    </div>)

}


export default Buttons