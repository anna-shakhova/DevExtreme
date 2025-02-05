import React, { useCallback, useMemo, useRef, useState, FC } from 'react';
import {TextBox, Button as TextBoxButton, TextBoxTypes} from 'devextreme-react/text-box';
import { ButtonTypes } from 'devextreme-react/button';
import {
    Validator,
    RequiredRule,
    CompareRule,
    EmailRule,
    AsyncRule,
    ValidatorRef,
} from 'devextreme-react/validator';
import {
    passwordLabel,
    emailLabel,
} from './data';
import type {FormData} from './types';
import './styles.css';


interface CredentialsProps {
    data: FormData;
    visible: boolean;
    onChange: (partialData: Partial<FormData>) => void;
}

const Credentials: FC<CredentialsProps> = ({data, visible, onChange}) => {
    const validatorRef = useRef<ValidatorRef>(null);
    const [passwordMode, setPasswordMode] = useState<TextBoxTypes.TextBoxType>('password');
    const [confirmPasswordMode, setConfirmPasswordMode] = useState<TextBoxTypes.TextBoxType>('password');

    const passwordButton = useMemo<ButtonTypes.Properties>(
        () => ({
            icon: 'eyeopen',
            stylingMode: 'text',
            onClick: () => {
                setPasswordMode(passwordMode === 'text' ? 'password' : 'text');
            },
        }),
        [passwordMode, setPasswordMode],
    );

    const confirmPasswordButton = useMemo<ButtonTypes.Properties>(
        () => ({
            icon: 'eyeopen',
            stylingMode: 'text',
            onClick: () => {
                setConfirmPasswordMode(confirmPasswordMode === 'text' ? 'password' : 'text');
            },
        }),
        [confirmPasswordMode, setConfirmPasswordMode],
    );

    const passwordComparison = useCallback<any>(() => data.password, [data.password]);

    const onPasswordChanged = useCallback(
        (e: TextBoxTypes.ValueChangedEvent) => {
            onChange({password: e.value});

            if (data.confirmPassword) {
                validatorRef.current?.instance().validate();
            }
        },
        [data.confirmPassword, onChange],
    );

    const onConfirmPasswordChanged = useCallback((e: TextBoxTypes.ValueChangedEvent) => {
        onChange({confirmPassword: e.value});
    }, [onChange]);

    const onEmailChanged = useCallback((e: TextBoxTypes.ValueChangedEvent) => {
        onChange({email: e.value});
    }, [onChange]);

    if (!visible) {
        return null;
    }

    return (
        <div className="dx-fieldset">
            <div className="dx-field">
                <div className="dx-field-label">Email</div>
                <div className="dx-field-value">
                    <TextBox inputAttr={emailLabel} value={data.email}
                             onValueChanged={onEmailChanged}>
                        <Validator>
                            <RequiredRule message="Email is required"/>
                            <EmailRule message="Email is invalid"/>
                            <AsyncRule
                                message="Email is already registered"
                                validationCallback={asyncValidation}
                            />
                        </Validator>
                    </TextBox>
                </div>
            </div>
            <div className="dx-field">
                <div className="dx-field-label">Password</div>
                <div className="dx-field-value">
                    <TextBox
                        mode={passwordMode}
                        value={data.password}
                        inputAttr={passwordLabel}
                        onValueChanged={onPasswordChanged}
                    >
                        <TextBoxButton
                            name="password"
                            location="after"
                            options={passwordButton}
                        />
                        <Validator>
                            <RequiredRule message="Password is required"/>
                        </Validator>
                    </TextBox>
                </div>
            </div>
            <div className="dx-field">
                <div className="dx-field-label">Confirm Password</div>
                <div className="dx-field-value">
                    <TextBox
                        value={data.confirmPassword}
                        inputAttr={passwordLabel}
                        onValueChanged={onConfirmPasswordChanged}
                        mode={confirmPasswordMode}
                    >
                        <TextBoxButton
                            name="password"
                            location="after"
                            options={confirmPasswordButton}
                        />
                        <Validator ref={validatorRef}>
                            <RequiredRule message="Confirm Password is required"/>
                            <CompareRule
                                message="Password and Confirm Password do not match"
                                comparisonTarget={passwordComparison}
                            />
                        </Validator>
                    </TextBox>
                </div>
            </div>
        </div>
    );
};

function sendRequest(value: string) {
    const invalidEmail = 'test@dx-email.com';
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value !== invalidEmail);
        }, 1000);
    });
}

function asyncValidation(params: { value: any }) {
    return sendRequest(params.value);
}

export default Credentials;
