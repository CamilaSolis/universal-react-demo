import React, { Component } from 'react';
import FincieroLogo from './FincieroLogo';
import styles from './Header.scss';

class Home extends Component {
    render() {
        return (
            <header className={ styles.className }>
                <section>
                    <span><FincieroLogo /></span>
                    <div className={ styles.menu }>
                        <a
                            className={ styles.link }
                            href={'http://blog.finciero.com/estado-actualizado-de-comercios-que-funcionan-con-la-tarjeta-finciero/'}
                            target='_blank'>Comercios
                        </a>
                        <select
                            className={ styles.link }
                        >
                            <option value="es">es</option>
                            <option value="en">en</option>
                        </select>
                        <a
                            className={ styles.link }
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
