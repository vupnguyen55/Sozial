import React from 'react';

const Form = (props) => (
    <form className="col">
        <div className="input-group mb-3">
            <textarea rows='5' columns='60' type="text" className="form-control" placeholder={props.placeholder}
                value={props.value}
                onChange={props.handleChange} />
            <div className="input-group-append">
                <button className="btn btn-primary" type="button"
                    onClick={props.handleClick} >{props.btnName}
                </button>
            </div>
        </div>
    </form>
);

export default Form;
