import React, {useCallback, FC} from 'react';
import {TextBox, TextBoxTypes} from 'devextreme-react/text-box';
import {
    Validator,
    RequiredRule,
    PatternRule,
    StringLengthRule,
    RangeRule,
    CustomRule,
} from 'devextreme-react/validator';
import { nameLabel, dateLabel } from './data';
import type {FormData} from './types';
import './styles.css';
import DateBox, {DateBoxTypes} from "devextreme-react/cjs/date-box";
import DateRangeBox, {DateRangeBoxTypes} from "devextreme-react/cjs/date-range-box";


interface PersonalDataProps {
    data: FormData;
    visible: boolean;
    onChange: (partialData: Partial<FormData>) => void;
}

const namePattern = /^[^0-9]+$/;

const PersonalData: FC<PersonalDataProps> = ({data, visible, onChange}) => {
    const currentDate = new Date();
    const maxDate = new Date(currentDate.setFullYear(currentDate.getFullYear() - 21));

    const onNameChanged = useCallback((e: TextBoxTypes.ValueChangedEvent) => {
        onChange({name: e.value});
    }, [onChange]);


    const onDOBChanged = useCallback((e: DateBoxTypes.ValueChangedEvent) => {
        onChange({dob: e.value});
    }, [onChange]);

    const onVacationDatesChanged = useCallback((e: DateRangeBoxTypes.ValueChangedEvent) => {
        onChange({vacationDates: e.value});
    }, [onChange]);


    if (!visible) {
        return null;
    }

    return (
        <div className="dx-fieldset">
            <div className="dx-field">
                <div className="dx-field-label">Name</div>
                <div className="dx-field-value">
                    <TextBox
                        value={data.name}
                        inputAttr={nameLabel}
                        onValueChanged={onNameChanged}
                    >
                        <Validator>
                            <RequiredRule message="Name is required"/>
                            <PatternRule
                                message="Do not use digits in the Name"
                                pattern={namePattern}
                            />
                            <StringLengthRule
                                message="Name must have at least 2 symbols"
                                min={2}
                            />
                        </Validator>
                    </TextBox>
                </div>
            </div>
            <div className="dx-field">
                <div className="dx-field-label">Date of birth</div>
                <div className="dx-field-value">
                    <DateBox
                        value={data.dob ?? ''}
                        onValueChanged={onDOBChanged}
                        invalidDateMessage="The date must have the following format: MM/dd/yyyy"
                        inputAttr={dateLabel}
                    >
                        <Validator>
                            <RequiredRule message="Date of birth is required"/>
                            <RangeRule
                                message="You must be at least 21 years old"
                                max={maxDate}
                            />
                        </Validator>
                    </DateBox>
                </div>
            </div>
            <div className="dx-field">
                <div className="dx-field-label">Vacation Dates</div>
                <div className="dx-field-value">
                    <DateRangeBox
                        value={data.vacationDates}
                        onValueChanged={onVacationDatesChanged}
                    >
                        <Validator>
                            <CustomRule
                                message="The vacation period must not exceed 25 days"
                                validationCallback={validateVacationDatesRange}/>
                            <CustomRule
                                message="Both start and end dates must be selected"
                                validationCallback={validateVacationDatesPresence}/>
                        </Validator>
                    </DateRangeBox>
                </div>
            </div>
        </div>
    );
};

function validateVacationDatesRange({value}) {
    const [startDate, endDate] = value;

    if (startDate === null || endDate === null) {
        return true;
    }

    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    const daysDifference = Math.abs((endDate - startDate) / millisecondsPerDay);

    return daysDifference < 25;
}

function validateVacationDatesPresence({value}) {
    const [startDate, endDate] = value;

    if (startDate === null && endDate === null) {
        return true;
    }

    return startDate !== null && endDate !== null;
}

export default PersonalData;
