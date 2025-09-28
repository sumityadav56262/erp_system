import React from 'react';
import { DUMMY_COURSES } from '../data/dummyData';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/ui/Table';

export const CourseListPage = () => (
    <div>
        <h1 className="text-3xl font-bold mb-6">Course Management</h1>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>All Courses</CardTitle>
                <Button>Add New Course</Button>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Course Code</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Instructor</TableHead>
                            <TableHead>Credits</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {DUMMY_COURSES.map(course => (
                            <TableRow key={course.code}>
                                <TableCell>{course.code}</TableCell>
                                <TableCell className="font-medium">{course.name}</TableCell>
                                <TableCell>{course.teacher}</TableCell>
                                <TableCell>{course.credits}</TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="sm">Edit</Button>
                                    <Button variant="ghost" size="sm" className="text-destructive">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
);
