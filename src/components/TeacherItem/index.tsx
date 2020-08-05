import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem(){
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars3.githubusercontent.com/u/20406684?s=460&u=018f76ebd61f5bc64d7ccf7cbec5d2883b364412&v=4" alt="Geison Nervo"></img>
                <div>
                    <strong>Geison Nervo</strong>
                    <span>Matemática</span>                            
                </div>
            </header>
            <p> dhausdhsa dashdusa dhausdhsau dashdusa
                <br /><br />
                dashudhas duashd usahdusa dasud hsaudhasud asudh asudhas udhas duhas duashdhduas
                hduasdhuashdsa daushd asudh asud has
            </p>
            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 96,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="WhatsApp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;


