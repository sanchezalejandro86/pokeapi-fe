import React, {useState} from 'react';
import './styles.css';

function SearchBox(props) {
    const [value, setValue] = useState('');

    const {onSubmit} = props;
    
    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();        
        onSubmit(value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input  className="form-control" 
                            type="text" 
                            name="name" 
                            placeholder="Ingrese el nombre a buscar"
                            value={value} 
                            onChange={handleChange}
                            data-testid="search-input"
                            />
                </div>
                <div className="col-3">
                    <button type="submit" 
                            className="btn btn-primary btn-block" 
                            disabled={value === ''}
                            data-testid="search-button">Buscar</button>
                </div>
            </div>
        </form>
     
    );
}

export default SearchBox;
