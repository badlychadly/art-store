import React from 'react'


const EditForm = (props) => {

    return (
        <React.Fragment>
            <input className="editInput text-center" type="text" autoFocus name="name" value={props.product.name}/>
        </React.Fragment>
    )
}

export default EditForm