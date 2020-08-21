import React, {useState} from 'react';
import './styles.css';

function SearchBox(props) {
    const [value, setValue] = useState('');

    
    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit(event) {
        alert('A name was submitted: ' + value);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="row">
                <div class="col-9">
                    <input  className="form-control" 
                            type="text" 
                            name="name" 
                            placeholder="Ingrese el nombre a buscar"
                            value={value} onChange={handleChange}/>
                </div>
                <div class="col-3">
                    <button type="submit" class="btn btn-primary btn-block">Buscar</button>
                </div>
            </div>
        </form>
     
    );
}

export default SearchBox;
