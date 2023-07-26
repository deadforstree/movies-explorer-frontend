import React from "react";
import './AboutMe.css';
import studentPhoto from '../../images/student-photo.jpg'

function AboutMe() {
    return (
        <section className="about-me">
            <h2 className="about-me__title">Студент</h2>
            <div className="about-me__container">
                <div className="about-me__info-container">
                    <h3 className="about-me__name">Пётр</h3>
                    <p className="about-me__job">Фронтенд-разработчик, 25 лет</p>
                    <p className="about-me__description">
                        Я родился в городе Владимире, мне 25 лет. Работаю системным-администратором.
                        В свободное время занимаюсь спортом и обучением, дальше планирую развиваться в сфере IT и дальше.
                    </p>
                    <ul className="about-me__links">
                        <li>
                            <a className="about-me__link" href="https://github.com/deadforstree" target="_blank" rel="noreferrer">Github</a>
                        </li>
                    </ul>
                </div>
                <img className="about-me__photo" src={studentPhoto} alt="Фотография студента" />
            </div>
        </section>
    );
}

export default AboutMe;