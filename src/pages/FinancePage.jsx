import React from 'react';
import { DUMMY_STUDENTS } from '../data/dummyData';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../components/ui/Table';
import { cn } from '../lib/utils';

export const FinancePage = () => (
    <div>
        <h1 className="text-3xl font-bold mb-6">Fee Management</h1>
        <Card>
            <CardHeader>
                <CardTitle>Student Fee Status</CardTitle>
                <CardDescription>Overview of fee payments across all students.</CardDescription>
            </CardHeader>
            <CardContent>
                 <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Student ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead>Amount Due</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {DUMMY_STUDENTS.map(student => (
                            <TableRow key={student.id}>
                                <TableCell>{student.id}</TableCell>
                                <TableCell className="font-medium">{student.name}</TableCell>
                                <TableCell>{student.department}</TableCell>
                                <TableCell>${student.amountDue.toFixed(2)}</TableCell>
                                <TableCell>
                                    <span className={cn("px-2 py-1 rounded-full text-xs", 
                                        student.feeStatus === 'Paid' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' :
                                        student.feeStatus === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300' :
                                        'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300'
                                    )}>
                                        {student.feeStatus}
                                    </span>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="sm">View Details</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
);
