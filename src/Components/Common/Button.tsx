import React from 'react';
import Button from '@mui/material/Button';
import { CustomButtonProps } from './types';

const CanovaButton: React.FC<CustomButtonProps> = ({
    text,
    hoverColor,
    ...otherProps // Spread the rest of the props
}) => {
    return (
        <Button variant="contained" color="primary" sx={{ backgroundColor: hoverColor }} {...otherProps}>
            {text}
        </Button>
    )
};

export default CanovaButton;
