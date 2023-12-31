import { Navigate } from "react-router-dom";
import Form from "../Form/Form";
import './Register.css';
import { useFormWithValidation } from '../../utils/UseFormValidation';
import { useState } from "react";

function Register({ handleRegistration, loggedIn, errorMessage }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [isReqSent, setIsReqSent] = useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();
        handleRegistration({
            name: values.name,
            email: values.email,
            password: values.password
        });
        setIsReqSent(true);
    }

    if (loggedIn) {
        return <Navigate to="/movies" replace />
    }

    return (
        <Form
            title='Добро пожаловать!'
            buttonText='Зарегистрироваться'
            text='Уже зарегистрированы?'
            linkText='Войти'
            path='/signin'
            handleSubmit={handleSubmit}
            isValid={isValid}
            errorMessage={errorMessage}
            isReqSent={isReqSent}
        >
            <fieldset className="form__fields">
                <div className="form__field">
                    <label className="form__label">Имя</label>
                    <input
                        name="name"
                        className={`form__input ${!errors.name ? '' : 'form__input_color-error'}`}
                        type="text"
                        required
                        placeholder="Имя"
                        minLength="2"
                        maxLength="30"
                        onChange={handleChange}
                        value={values.name || ''}
                    />
                    <span className="form__input-error">{errors.name}</span>
                </div>

                <div className="form__field">
                    <label className="form__label">E-mail</label>
                    <input
                        name="email"
                        className={`form__input ${!errors.email ? '' : 'form__input_color-error'}`}
                        type="email"
                        required
                        placeholder="E-mail"
                        onChange={handleChange}
                        value={values.email || ''}
                    />
                    <span className="form__input-error">{errors.email}</span>
                </div>
                <div className="form__field">
                    <label className="form__label">Пароль</label>
                    <input
                        name="password"
                        className={`form__input ${!errors.password ? '' : 'form__input_color-error'}`}
                        type="password"
                        required
                        placeholder="Пароль"
                        minLength="6"
                        onChange={handleChange}
                        value={values.password || ''}
                    />
                    <span className="form__input-error">{errors.password}</span>
                </div>

            </fieldset>
        </Form>
    );
}

export default Register;