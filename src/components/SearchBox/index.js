import React, {useState} from 'react';
import './styles.css';
import PokemonService from '../../services/Pokemon';

function SearchBox(props) {
    const [value, setValue] = useState('');

    const {handleResults} = props;

    let isLoading = false;
    
    function handleChange(event) {
        setValue(event.target.value);
    }

    async function handleSubmit(event) {

        event.preventDefault();
        console.log("Searching: " + value);
        if(value){
            isLoading = true;
            
            try{
                let results = await PokemonService.find(value);
                handleResults(results.data);
            }finally{
                isLoading = false;
            }
        }


    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
                    <input  className="form-control" 
                            type="text" 
                            name="name" 
                            placeholder="Ingrese el nombre a buscar"
                            value={value} onChange={handleChange}/>
                </div>
                <div className="col-3">
                    <button type="submit" className="btn btn-primary btn-block" disabled={isLoading}>Buscar</button>
                </div>
            </div>
        </form>
     
    );
}

export default SearchBox;
