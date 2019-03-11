import React from 'react';

const Alert = (props) => (
    <div className='alert alert-danger'>
        <i className="fa fa-exclamation-circle fa-lg" aria-hidden="true"></i>  {props.message}
    </div>
)

export default Alert;