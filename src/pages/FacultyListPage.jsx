import React from 'react';
import { DUMMY_FACULTY } from '../data/dummyData';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/ui/Table';

export const FacultyListPage = () => (
    <div>
        <h1 className="text-3xl font-bold mb-6">Faculty Management</h1>
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>All Faculty</CardTitle>
                <Button>Add New Faculty</Button>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Faculty ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {DUMMY_FACULTY.map(faculty => (
                            <TableRow key={faculty.id}>
                                <TableCell>{faculty.id}</TableCell>
                                <TableCell className="font-medium">{faculty.name}</TableCell>
                                <TableCell>{faculty.email}</TableCell>
                                <TableCell>{faculty.department}</TableCell>
                                <TableCell>{faculty.role}</TableCell>
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
