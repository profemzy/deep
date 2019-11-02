import React from 'react';

const ButtonInline = ({onClick, children, type = 'button'}) =>
    <Button
        type={type}
        className="button-inline"
        onClick={onClick}
    >
        {children}
    </Button>

const Button = ({onClick, className, children, type = 'button'}) =>
    <button
        type={type}
        className={className}
        onClick={onClick}
    >
        {children}
    </button>

export {ButtonInline};