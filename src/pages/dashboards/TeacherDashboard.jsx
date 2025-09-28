import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { BookOpenIcon, CalendarIcon, FileTextIcon, SparklesIcon } from '../../components/icons';

export const TeacherDashboard = () => {
    const { callGeminiAPI } = useContext(AppContext);
    const [assignmentTopic, setAssignmentTopic] = useState('');

    const handleGenerate = async () => {
        if (!assignmentTopic) return;
        const prompt = `Generate 3 creative and distinct assignment ideas for college students on the topic of "${assignmentTopic}". For each idea, provide a title and a brief one-paragraph description of the task.`;
        callGeminiAPI(prompt, 'Assignment Idea Generation');
    };

     return (
         <div className="space-y-6">
            <h1 className="text-3xl font-bold">Teacher Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <StatCard title="Assigned Courses" value="4" icon={<BookOpenIcon className="h-4 w-4 text-muted-foreground" />} description="For this semester" />
                <StatCard title="Today's Classes" value="3" icon={<CalendarIcon className="h-4 w-4 text-muted-foreground" />} description="Check timetable for details" />
                <StatCard title="Pending Assignments" value="12" icon={<FileTextIcon className="h-4 w-4 text-muted-foreground" />} description="To be graded" />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle>✨ AI Assistant: Generate Assignment Ideas</CardTitle>
                    <CardDescription>Enter a topic to brainstorm assignment ideas for your students.</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <Label htmlFor="assignment-topic">Topic</Label>
                        <Input id="assignment-topic" placeholder="e.g., The Laws of Thermodynamics" value={assignmentTopic} onChange={(e) => setAssignmentTopic(e.target.value)} />
                    </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleGenerate} disabled={!assignmentTopic}>
                        <SparklesIcon className="mr-2 h-4 w-4" /> Generate Ideas
                    </Button>
                </CardFooter>
             </Card>
         </div>
    );
};
