import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { DollarSignIcon, FileTextIcon, UsersIcon, BarChartIcon, SparklesIcon } from '../../components/icons';

export const AccountantDashboard = () => {
    const { callGeminiAPI } = useContext(AppContext);
    const [summaryPeriod, setSummaryPeriod] = useState('');

    const handleGenerate = async () => {
        if (!summaryPeriod) return;
        const prompt = `Generate a concise financial summary for a college accountant for the following period: "${summaryPeriod}". The summary should include key points on fee collection, outstanding dues, and any notable financial trends. Assume dummy data for total revenue of $500,000, expenses of $350,000, and a 5% increase in fee collection compared to the last period. Present the summary in a professional, report-style format using markdown.`;
        callGeminiAPI(prompt, 'Financial Summary Generation');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Accountant Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Fees Collected (Today)" value="$15,250" icon={<DollarSignIcon className="h-4 w-4 text-muted-foreground" />} description="As of 5:00 PM" />
                <StatCard title="Total Pending Dues" value="$89,400" icon={<FileTextIcon className="h-4 w-4 text-muted-foreground" />} description="Across all departments" />
                <StatCard title="Transactions Validated" value="72" icon={<UsersIcon className="h-4 w-4 text-muted-foreground" />} description="Today's successful payments" />
                <StatCard title="Monthly Target" value="75%" icon={<BarChartIcon className="h-4 w-4 text-muted-foreground" />} description="Collection target progress" />
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Transaction Validation</CardTitle>
                        <CardDescription>Enter a transaction ID to validate a payment.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <div className="space-y-2">
                            <Label htmlFor="transaction-id">Transaction ID</Label>
                            <Input id="transaction-id" placeholder="e.g., T123456789" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Validate</Button>
                    </CardFooter>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle>✨ AI Assistant: Generate Financial Summary</CardTitle>
                        <CardDescription>Enter a period to generate a financial report summary.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label htmlFor="summary-period">Period</Label>
                            <Input id="summary-period" placeholder="e.g., Last 30 Days, Q4 2024" value={summaryPeriod} onChange={(e) => setSummaryPeriod(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleGenerate} disabled={!summaryPeriod}>
                            <SparklesIcon className="mr-2 h-4 w-4" /> Generate Summary
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};
