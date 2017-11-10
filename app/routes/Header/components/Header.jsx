import React, { Component } from 'react';
import FincieroLogo from './FincieroLogo';


class Home extends Component {
    render() {
        return (
            <header >
                <section>
                    <span><FincieroLogo /></span>
                    <div >
                        <a
                            
                            href={'http://blog.finciero.com/estado-actualizado-de-comercios-que-funcionan-con-la-tarjeta-finciero/'}
                            target='_blank'>Comercios
                        </a>
                        <select
                            
                        >
                            <option value="es">es</option>
                            <option value="en">en</option>
                        </select>
                        <a
                            
                            href={'http://blog.finciero.com'}
                            target="_blank">Blog
                        </a>
                    </div>
                </section>
            </header>
        )
    }
}

module.exports = Home;
