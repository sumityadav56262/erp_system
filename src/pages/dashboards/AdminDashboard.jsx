import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { UsersIcon, BookOpenIcon, DollarSignIcon, SparklesIcon } from '../../components/icons';

export const AdminDashboard = () => {
    const { callGeminiAPI } = useContext(AppContext);
    const [announcementTopic, setAnnouncementTopic] = useState('');

    const handleGenerate = async () => {
        if (!announcementTopic) return;
        const prompt = `Write a formal and concise college announcement for the notice board about the following topic: "${announcementTopic}". Include a clear title, date, and a call to action if applicable.`;
        callGeminiAPI(prompt, 'Announcement Generation');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="Total Students" value="2,543" icon={<UsersIcon className="h-4 w-4 text-muted-foreground" />} description="+20.1% from last month" />
                <StatCard title="Total Faculty" value="152" icon={<UsersIcon className="h-4 w-4 text-muted-foreground" />} description="+18% from last month" />
                <StatCard title="Total Courses" value="78" icon={<BookOpenIcon className="h-4 w-4 text-muted-foreground" />} description="+5 from last year" />
                <StatCard title="Revenue (This Month)" value="$45,231.89" icon={<DollarSignIcon className="h-4 w-4 text-muted-foreground" />} description="+12% from last month" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                 <Card className="col-span-12 lg:col-span-4">
                    <CardHeader>
                        <CardTitle>✨ AI Assistant: Generate Announcement</CardTitle>
                        <CardDescription>Enter a topic and let AI draft an announcement.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            <Label htmlFor="announcement-topic">Topic</Label>
                            <Input id="announcement-topic" placeholder="e.g., Annual Sports Day on Dec 15th" value={announcementTopic} onChange={(e) => setAnnouncementTopic(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleGenerate} disabled={!announcementTopic}>
                            <SparklesIcon className="mr-2 h-4 w-4" /> Generate
                        </Button>
                    </CardFooter>
                </Card>
                <Card className="col-span-12 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-2 gap-2">
                        <Button>Add Student</Button>
                        <Button>Add Faculty</Button>
                        <Button variant="secondary">Add Course</Button>
                        <Button variant="secondary">Generate Report</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
