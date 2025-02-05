import React, {useCallback, useRef, useState} from 'react';
import Button from 'devextreme-react/button';
import ValidationGroup, { ValidationGroupRef } from 'devextreme-react/validation-group';
import ValidationSummary from 'devextreme-react/validation-summary';

import notify from 'devextreme/ui/notify';

import type {FormData} from './types';
import './styles.css';
import Credentials from "./Credentials";
import PersonalData from "./PersonalData";
import BillingAddress from "./BillingAddress";

const onFormSubmit = (e: { preventDefault: () => void }) => {
    notify(
        {
            message: 'You have submitted the form',
            position: {
                my: 'center top',
                at: 'center top',
            },
        },
        'success',
        3000,
    );

    e.preventDefault();
};

interface Step {
    index: number;
    title: string;
    isValid?: boolean;
}

const initialValues: FormData = {
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    dob: null,
    vacationDates: [null, null],
    country: '',
    city: '',
    address: '',
    phone: '',
};

function FormWithStepper() {
    const [selectedStep, setSelectedStep] = useState<number>(0);
    const [steps, setSteps] = useState<Step[]>([
        {index: 0, title: 'Credentials'},
        {index: 1, title: 'Personal Data'},
        {index: 2, title: 'Billing address'},
    ]);

    const [formData, setFormData] = useState<FormData>(initialValues);

    const credentialsValidationRef = useRef<ValidationGroupRef>(null);
    const personalDataValidationRef = useRef<ValidationGroupRef>(null);
    const addressValidationRef = useRef<ValidationGroupRef>(null);

    const getStepType = useCallback((step: Step) => {
        if (step.isValid === false) {
            return 'danger';
        }

        if (selectedStep === step.index) {
            return 'default';
        }

        if (step.isValid) {
            return 'success';
        }

        return 'normal';
    }, [selectedStep]);

    const onPrevButtonClick = useCallback(() => {
        setSelectedStep((prev) => prev - 1);
    }, []);

    const onNextButtonClick = useCallback(() => {
        const validationRef = {
            0: credentialsValidationRef,
            1: personalDataValidationRef,
            2: addressValidationRef,
        }[selectedStep];

        const isValid = validationRef?.current?.instance().validate()?.isValid;

        setSteps((prev) => prev.map((step) => {
            if (step.index === selectedStep) {
                return {
                    ...step,
                    isValid,
                }
            }

            return step;
        }));

        if (isValid) {
            setSelectedStep(selectedStep + 1);
        }
    }, [selectedStep]);

    const onChange = useCallback((partialData: Partial<FormData>) => {
        setFormData((prev) => ({
            ...prev,
            ...partialData
        }));
    }, []);

    return (
        <>
            <div className="stepper">
                {steps.map((step) => (
                    <Button
                        key={step.index}
                        className="margin-button"
                        type={getStepType(step)}
                        onClick={() => setSelectedStep(step.index)}
                    >
                        {step.title}
                    </Button>
                ))}
            </div>
            <form
                action="your-action"
                onSubmit={selectedStep === 2 ? onFormSubmit : undefined}
            >
                <ValidationGroup ref={credentialsValidationRef}>
                    <Credentials data={formData} visible={selectedStep === 0} onChange={onChange}/>
                </ValidationGroup>

                <ValidationGroup ref={personalDataValidationRef}>
                    <PersonalData data={formData} visible={selectedStep === 1} onChange={onChange}/>
                </ValidationGroup>

                <ValidationGroup ref={addressValidationRef}>
                    <BillingAddress data={formData} visible={selectedStep === 2} onChange={onChange}/>
                </ValidationGroup>

                <div className="navigation">
                    <Button
                        className="margin-button"
                        width="120px"
                        id="button"
                        text="Back"
                        type="normal"
                        visible={selectedStep !== 0}
                        onClick={onPrevButtonClick}
                    />
                    <Button
                        width="120px"
                        id="button"
                        text={selectedStep === 2 ? "Register" : "Next"}
                        type="default"
                        onClick={onNextButtonClick}
                        useSubmitBehavior={true}
                    />
                </div>
                <ValidationSummary id="summary"/>
            </form>
        </>
    );
}

export default FormWithStepper;
