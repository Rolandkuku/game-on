import React, { PropTypes as T } from "react";


const SubscribeForm = ({ user, onUserSubscribeSubmit, errors }) => {
    if (!user) {
        user = {
            name: "",
            email: "",
            password: ""
        };
    }

    const nameChanged = (e) => {
        user.name = e.target.value.trim();
    }
    const emailChanged = (e) => {
        user.email = e.target.value.trim();
    }
    const passwordChanged = (e) => {
        user.password = e.target.value.trim();
    }


    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    onUserSubscribeSubmit(user);
                }}
            >
                <label>
                    Name
                    <input
                        type="text"
                        defaultValue={user.name}
                        onChange={nameChanged}
                        style={{
                            border: errors.filter(e => e.inputName === "name").length === 0 ? "1px solid black" : "1px solid red"
                        }}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="text"
                        defaultValue={user.email}
                        onChange={emailChanged}
                        style={{
                            border: errors.filter(e => e.inputName === "email").length === 0 ? "1px solid black" : "1px solid red"
                        }}
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        defaultValue={user.password}
                        onChange={passwordChanged}
                        style={{
                            border: errors.filter(e => e.inputName === "password").length === 0 ? "1px solid black" : "1px solid red"
                        }}
                    />
                </label>
                <button type="submit">
                    Subscribe
                </button>
            </form>
            <ul>
                {errors.map((e, index) => (
                    <li key={index}>{e.label}</li>
                ))}
            </ul>
        </div>
    );
};

SubscribeForm.propTypes = {
    onUserSubscribeSubmit: T.func.isRequired,
    user: T.shape({
        // name: T.string.isRequired,
        // email: T.string.isRequired,
        // password: T.string.isRequired
    }),
    errors: T.arrayOf(
        T.shape({
            inputName: T.string.isRequired,
            label: T.string.isRequired,
            pass: T.bool.isRequired
        }).isRequired
    ).isRequired
};

export default SubscribeForm;
