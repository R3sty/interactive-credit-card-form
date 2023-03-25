import { MouseEventHandler } from "react";

interface GlobalButton {
    type: 'button' | 'submit';
    buttonText: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

export type { GlobalButton };