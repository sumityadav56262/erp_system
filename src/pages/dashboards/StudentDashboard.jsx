import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { DUMMY_COURSES } from '../../data/dummyData';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../components/ui/Table';
import { CalendarIcon, FileTextIcon, DollarSignIcon, SparklesIcon } from '../../components/icons';

export const StudentDashboard = () => {
    const { callGeminiAPI } = useContext(AppContext);

    const handleGenerate = async () => {
        const courseList = DUMMY_COURSES.map(c => c.name).join(', ');
        const prompt = `I am a college student taking the following courses: ${courseList}. My exams are in two weeks. Create a concise, actionable 7-day study plan for me. Structure it day-by-day. Use markdown for formatting.`;
        callGeminiAPI(prompt, 'Study Plan Generation');
    };

    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold">Student Dashboard</h1>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard title="My Attendance" value="92%" icon={<CalendarIcon className="h-4 w-4 text-muted-foreground" />} description="Overall percentage" />
                <StatCard title="Upcoming Exams" value="3" icon={<FileTextIcon className="h-4 w-4 text-muted-foreground" />} description="Starting next week" />
                <StatCard title="Assignments Due" value="2" icon={<FileTextIcon className="h-4 w-4 text-muted-foreground" />} description="Due this Friday" />
                <StatCard title="Fees Due" value="$250.00" icon={<DollarSignIcon className="h-4 w-4 text-muted-foreground" />} description="Pay before end of month" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-12 lg:col-span-4">
                    <CardHeader className="flex-row items-center justify-between">
                        <div>
                           <CardTitle>My Courses</CardTitle>
                           <CardDescription>Your enrolled courses for the semester.</CardDescription>
                        </div>
                         <Button onClick={handleGenerate} size="sm">
                            <SparklesIcon className="mr-2 h-4 w-4" /> ✨ Create Study Plan
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Course Code</TableHead>
                                    <TableHead>Course Name</TableHead>
                                    <TableHead>Instructor</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {DUMMY_COURSES.map(course => (
                                    <TableRow key={course.code}>
                                        <TableCell>{course.code}</TableCell>
                                        <TableCell>{course.name}</TableCell>
                                        <TableCell>{course.teacher}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card className="col-span-12 lg:col-span-3">
                    <CardHeader>
                        <CardTitle>Pay Fees</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                        <img src="https://placehold.co/200x200/png?text=Scan+QR" alt="QR Code" className="rounded-md mb-4"/>
                        <p className="text-sm text-muted-foreground mb-2">Scan to pay via UPI</p>
                        <Button className="w-full">Enter Transaction ID</Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};
