import React from 'react';
import { cn } from '../../lib/utils';

export const Switch = React.forwardRef(({ className, onCheckedChange, ...props }, ref) => (
    <button
        type="button"
        role="switch"
        aria-checked={props.checked}
        onClick={onCheckedChange}
        className={cn(
            'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50',
            props.checked ? 'bg-primary' : 'bg-input',
            className
        )}
        {...props}
    >
        <span
            aria-hidden="true"
            className={cn(
                'pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform',
                props.checked ? 'translate-x-4' : 'translate-x-0'
            )}
        />
    </button>
));
