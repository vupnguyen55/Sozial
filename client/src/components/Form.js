import React from 'react';

const Form = (props) => (
    <form className="col">
        <div className="input-group mb-3">
            <input type="text" className="form-control"
                value={props.value}
                onChange={props.handleChange} />
            <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button"
                    onClick={props.handleClick} >{props.btnName}
                </button>
            </div>
        </div>
    </form>
);

export default Form;
