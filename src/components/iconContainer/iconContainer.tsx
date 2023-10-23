import React, { ReactNode } from 'react';
import './iconContainer.scss';
import { Button } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

interface IconContainerProps {
    children: ReactNode;
    size?: number;
    tooltip?: string;
    background: string;
}

export default function IconContainer(props: IconContainerProps) {
    const { children, size, tooltip, background } = props;

    return (
        <Tooltip title={tooltip} arrow>
            <div
                className="container"
                style={{
                    width: size ? size : 40,
                    height: size ? size : 40,
                }}
            >
                <Button
                    sx={{
                        backgroundColor: { background },
                        width: '100%',
                        height: '100%',
                        minWidth: '0',
                        border: '1px solid #323030',
                        boxShadow:
                            '2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(63, 63, 63, 0.5)',
                        borderRadius: 2,
                    }}
                >
                    {children}
                </Button>
            </div>
        </Tooltip>
    );
}
