import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className="f3">
            {'this magic brain wil detect pictures :)'}
            </p>
            <div className="center">
                <div className="form pa4 br3 shadow-4">
                    <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange} />
                    <button onClick={onSubmit} className="w-30 bn grow f4 link ph3 pv2 dib white bg-light-purple">Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;