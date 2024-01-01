import * as React from 'react';
import Button from '@mui/material/Button';
import { ReactNode } from 'react';
import './IconLabelButtons.scss';

interface IconLabelButtonsProps {
    children?: string | ReactNode;
    Icon?: ReactNode;
    StartIcon?: boolean;
    Variant?: 'text' | 'outlined' | 'contained';
    size?: 'small' | 'large';
    textTransform?: 'uppercase' | 'none' | 'lowercase';
    onClick?: () => void;
}

export default function IconLabelButtons(props: IconLabelButtonsProps) {
    const { children, Icon, Variant, StartIcon, size, textTransform, onClick } =
        props;
    return (
        <div>
            <Button
                variant={Variant ? Variant : 'outlined'}
                startIcon={StartIcon ? Icon : undefined}
                endIcon={!StartIcon ? Icon : undefined}
                sx={{
                    borderRadius: 4,
                    textTransform: { textTransform },
                    color: '#2b86ff'
                }}
                size={size ? size : 'small'}
                onClick={onClick}
            >
                {children ? children : undefined}
            </Button>
        </div>
    );
}
