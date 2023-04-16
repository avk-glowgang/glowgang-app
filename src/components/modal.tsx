import React, { useState } from 'react';

interface AlertProps {
    message: string;
    type?: 'success' | 'warning' | 'error';
    dismissible?: boolean;
}

const Alert: React.FC<AlertProps> = ({ message, type = 'success', dismissible = true }) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) {
        return null;
    }

    const getIcon = () => {
        switch (type) {
            case 'success':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                );
            case 'warning':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v2m0 4h.01m-6.938 6.094l1.73-1.032a1 1 0 011.032 0l1.73 1.032a1 1 0 00.984 0l1.73-1.032a1 1 0 011.032 0l1.73 1.032a1 1 0 00.984 0l1.73-1.032a1 1 0 011.032 0l1.73 1.032M4 4v5a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H5a1 1 0 00-1 1z" />
                    </svg>
                );
            case 'error':
                return (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v4m0 0v4m0-4h.01m-6.938 0a9 9 0 019.789-7.5 9 9 0 107.5 9.789 9 9 0 01-7.5-9.789z" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div role="alert" className={`rounded-xl border ${type === 'success' ? 'border-green-100' : type === 'warning' ? 'border-yellow-100' : 'border-red-100'} p-4 shadow-xl`}>
            <div className="flex items-start gap-4">
                <span className={`text-${type}-600`}>{getIcon}</span>

                <div className="flex-1">
                    <strong className="block font-medium text-gray-900">{type === 'success' ? 'Changes saved' : type === 'warning' ? 'Warning' : 'Error'}</strong>

                    <p className="mt-1 text-sm text-gray-700">
                        {message}
                    </p>
                </div>

                {dismissible && (
                    <button className="text-gray-500 transition hover:text-gray-600" onClick={() => setDismissed(true)}>
                        <span className="sr-only">Dismiss popup</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Alert;



// This component takes in a message prop, which is the text to be displayed in the alert.It also has two optional props, type and dismissible.Type determines the color and icon displayed in the alert, and dismissible adds a button to dismiss the alert.By default, the type is set to 'success' and the alert is dismissible.

// To use this component in your app, simply import it and add it to your JSX:


// import Alert from './Alert';

// function MyComponent() {
//   return (
//     <div>
//       <Alert message="Your product changes have been saved." />
//       <Alert message="Warning: Your session will expire soon." type="warning" />
//       <Alert message="Error: Failed to load data." type="error" dismissible={false} />
//     </div>
//   );
// }
