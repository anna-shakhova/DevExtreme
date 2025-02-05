import React, { useCallback, FC } from 'react';
import {TextBox, TextBoxTypes} from 'devextreme-react/text-box';
import {
    Validator,
    RequiredRule,
    PatternRule,
    StringLengthRule,
} from 'devextreme-react/validator';;
import {
    countries,
    maskLabel,
    cityLabel,
    addressLabel,
    countryLabel,
} from './data';
import type {FormData} from './types';
import './styles.css';
import SelectBox, {SelectBoxTypes} from "devextreme-react/cjs/select-box";

interface BillingAddressProps {
    data: FormData;
    visible: boolean;
    onChange: (partialData: Partial<FormData>) => void;
}

const cityPattern = '^[^0-9]+$';
const phonePattern = /^[02-9]\d{9}$/;
const phoneRules = {
    X: /[02-9]/,
};

const BillingAddress: FC<BillingAddressProps> = ({data, visible, onChange}) => {
    const onCountryChanged = useCallback((e: SelectBoxTypes.SelectionChangedEvent) => {
        onChange({country: e.selectedItem});
    }, [onChange]);

    const onCityChanged = useCallback((e: TextBoxTypes.ValueChangedEvent) => {
        onChange({city: e.value});
    }, [onChange]);

    const onAddressChanged = useCallback((e: TextBoxTypes.ValueChangedEvent) => {
        onChange({address: e.value});
    }, [onChange]);

    const onPhoneChanged = useCallback((e: TextBoxTypes.ValueChangedEvent) => {
        onChange({phone: e.value});
    }, [onChange]);

    if (!visible) {
        return null;
    }

    return (
        <div className="dx-fieldset">
            <div className="dx-field">
                <div className="dx-field-label">Country</div>
                <div className="dx-field-value">
                    <SelectBox
                        dataSource={countries}
                        validationMessagePosition="left"
                        inputAttr={countryLabel}
                        value={data.country}
                        onSelectionChanged={onCountryChanged}
                    >
                        <Validator>
                            <RequiredRule message="Country is required"/>
                        </Validator>
                    </SelectBox>
                </div>
            </div>
            <div className="dx-field">
                <div className="dx-field-label">City</div>
                <div className="dx-field-value">
                    <TextBox
                        validationMessagePosition="left"
                        inputAttr={cityLabel}
                        value={data.city}
                        onValueChanged={onCityChanged}
                    >
                        <Validator>
                            <RequiredRule message="City is required"/>
                            <PatternRule
                                message="Do not use digits in the City name"
                                pattern={cityPattern}
                            />
                            <StringLengthRule
                                message="City must have at least 2 symbols"
                                min={2}
                            />
                        </Validator>
                    </TextBox>
                </div>
            </div>
            <div className="dx-field">
                <div className="dx-field-label">Address</div>
                <div className="dx-field-value">
                    <TextBox
                        validationMessagePosition="left"
                        inputAttr={addressLabel}
                        value={data.address}
                        onValueChanged={onAddressChanged}
                    >
                        <Validator>
                            <RequiredRule message="Address is required"/>
                        </Validator>
                    </TextBox>
                </div>
            </div>
            <div className="dx-field">
                <div className="dx-field-label">
                    Phone <i>(optional)</i>
                </div>
                <div className="dx-field-value">
                    <TextBox
                        mask="+1 (X00) 000-0000"
                        inputAttr={maskLabel}
                        maskRules={phoneRules}
                        maskInvalidMessage="The phone must have a correct USA phone format"
                        validationMessagePosition="left"
                        value={data.phone}
                        onValueChanged={onPhoneChanged}
                    >
                        <Validator>
                            <PatternRule
                                message="The phone must have a correct USA phone format"
                                pattern={phonePattern}
                            />
                        </Validator>
                    </TextBox>
                </div>
            </div>
        </div>
    );
};

export default BillingAddress;
