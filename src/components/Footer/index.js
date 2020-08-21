import React from 'react';
import './styles.css';

function Footer() {
    return(
        <footer>  
            <div className="container">
                <div className="row">
                    <div className="col-8">Hecho por Alejandro Sánchez</div>
                    <div className="col-4">
                         <a href="https://github.com/sanchezalejandro86" className="btn btn-block btn-info">Ir a mi repo</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer