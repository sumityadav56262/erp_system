import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/Card';
import { Button } from './ui/Button';
import { Textarea } from './ui/Textarea';
import { SparklesIcon, XIcon } from './icons';

export const GeminiModal = () => {
    const { modalConfig, setModalConfig } = useContext(AppContext);

    if (!modalConfig.isOpen) return null;

    const closeModal = () => setModalConfig({ isOpen: false, isLoading: false, content: '', title: '' });

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-2xl mx-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center"><SparklesIcon className="h-5 w-5 mr-2 text-primary" />{modalConfig.title}</CardTitle>
                        <Button variant="ghost" size="icon" onClick={closeModal}>
                            <XIcon className="h-4 w-4" />
                        </Button>
                    </CardHeader>
                    <CardContent>
                        {modalConfig.isLoading ? (
                            <div className="flex items-center justify-center h-48">
                                <svg className="animate-spin h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            </div>
                        ) : (
                            <Textarea readOnly value={modalConfig.content} className="h-64 bg-muted/50" />
                        )}
                    </CardContent>
                    <CardFooter>
                       <Button onClick={closeModal}>Close</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
