import { ButtonProps } from '@mui/material/Button';

export interface CustomButtonProps extends ButtonProps {
    text?: string;
    hoverColor?: string; // Custom prop for hover color
}