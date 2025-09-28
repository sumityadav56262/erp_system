import React from 'react';
import { DUMMY_EXAMS } from '../../data/dummyData';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../components/ui/Table';
import { CalendarIcon, GraduationCapIcon, UsersIcon } from '../../components/icons';

export const ExamOfficerDashboard = () => (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold">Exam Officer Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Upcoming Exams" value={DUMMY_EXAMS.length} icon={<CalendarIcon className="h-4 w-4 text-muted-foreground" />} description="In the next term" />
            <StatCard title="Results Published" value="56" icon={<GraduationCapIcon className="h-4 w-4 text-muted-foreground" />} description="For the last semester" />
            <StatCard title="Students Registered" value="2450" icon={<UsersIcon className="h-4 w-4 text-muted-foreground" />} description="For upcoming exams" />
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Upcoming Exam Schedule</CardTitle>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Date</TableHead>
                            <TableHead>Course Name</TableHead>
                            <TableHead>Exam Type</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {DUMMY_EXAMS.map(exam => (
                            <TableRow key={exam.code}>
                                <TableCell>{exam.date}</TableCell>
                                <TableCell className="font-medium">{exam.name}</TableCell>
                                <TableCell>{exam.type}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
);
