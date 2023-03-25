import { CSSProperties, ChangeEvent } from "react";

interface CardInputProps {
    formTitle: string
    labelId: string
    placeholder: string
    errorMessage: () => string,
    onChangeVal: (e: ChangeEvent<HTMLInputElement>) => void
    type?: 'text' | 'tel' | 'number'
    maxLength?: number
    minLength?: number
    min?: number
    max?: number
    list?: string
};

export default CardInputProps;