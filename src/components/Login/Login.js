import { Navigate } from "react-router-dom";
import Form from "../Form/Form";
import './Login.css';
import { useFormWithValidation } from '../../utils/UseFormValidation';
import { useState } from "react";

function Login({ handleAuthorization, loggedIn, errorMessage }) {

    const { values, handleChange, errors, isValid } = useFormWithValidation();
    const [isReqSent, setIsReqSent] = useState(false);

    function handleSubmit(evt) {
        evt.preventDefault();
        handleAuthorization({
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
            title='Рады видеть!'
            buttonText='Войти'
            text='Ещё не зарегистрированы?'
            linkText='Регистрация'
            path='signup'
            handleSubmit={handleSubmit}
            isValid={isValid}
            errorMessage={errorMessage}
            isReqSent={isReqSent}
        >
            <fieldset className="form__fields">
                <div className="form__field">
                    <label className="form__label">E-mail</label>
                    <input
                        name="email"
                        className={`form__input ${!errors.email ? '' : 'form__input_color-error'}`}
                        type="email"
                        required
                        placeholder="E-mail"
                        value={values.email || ''}
                        onChange={handleChange}
                    />
                    <span className="form__input-error">{errors.email}</span>
                </div>
                <div className="form__field">
                    <label className="form__label">Пароль</label>
                    <input
                        name="password"
                        className={`form__input ${!errors.password ? '' : 'form__input_color-error'}`}
                        type="password"
                        placeholder="Пароль"
                        minLength="6"
                        required
                        onChange={handleChange}
                        value={values.password || ''}
                    />
                    <span className="form__input-error">{errors.password}</span>
                </div>
            </fieldset>
        </Form>
    );
}

export default Login;