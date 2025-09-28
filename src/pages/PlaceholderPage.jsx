import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';

export const PlaceholderPage = ({ title }) => (
    <div>
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        <Card>
            <CardHeader>
                <CardTitle>Content Area</CardTitle>
            </CardHeader>
            <CardContent>
                <p>This is a placeholder page for the "{title}" module. Functionality and content will be implemented here.</p>
                <div className="mt-4 h-64 w-full bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Component/Data View for {title}</p>
                </div>
            </CardContent>
        </Card>
    </div>
);
