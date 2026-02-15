'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCcw } from 'lucide-react';
import TactileButton from './TactileButton';

interface Props {
    children?: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
        // Ideally log to an error reporting service here
    }

    public render() {
        if (this.state.hasError) {
            if (this.props.fallback) {
                return this.props.fallback;
            }

            return (
                <div className="w-full h-full min-h-[200px] flex flex-col items-center justify-center p-6 glass-panel rounded-xl text-center space-y-4">
                    <div className="p-3 bg-red-500/10 rounded-full border border-red-500/20">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                    </div>
                    <h2 className="text-xl font-bold text-neutral-200">Something went wrong</h2>
                    <p className="text-sm text-neutral-400 max-w-md">
                        {this.state.error?.message || "An unexpected error occurred in this component."}
                    </p>
                    <TactileButton
                        variant="secondary"
                        onClick={() => this.setState({ hasError: false })}
                    >
                        <RefreshCcw className="w-4 h-4 mr-2" />
                        Try Again
                    </TactileButton>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
