import React from 'react';
import { DUMMY_BOOKS } from '../../data/dummyData';
import { StatCard } from '../../components/dashboard/StatCard';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../components/ui/Card';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '../../components/ui/Table';
import { LibraryIcon, UsersIcon, BookOpenIcon } from '../../components/icons';
import { cn } from '../../lib/utils';

export const LibrarianDashboard = () => (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold">Librarian Dashboard</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <StatCard title="Total Books" value={DUMMY_BOOKS.length} icon={<LibraryIcon className="h-4 w-4 text-muted-foreground" />} description="In the library" />
            <StatCard title="Books Borrowed" value={DUMMY_BOOKS.filter(b => b.status === 'Borrowed').length} icon={<UsersIcon className="h-4 w-4 text-muted-foreground" />} description="Currently on loan" />
            <StatCard title="Books Available" value={DUMMY_BOOKS.filter(b => b.status === 'Available').length} icon={<BookOpenIcon className="h-4 w-4 text-muted-foreground" />} description="Ready to be borrowed" />
        </div>
        <Card>
            <CardHeader>
                <CardTitle>Library Overview</CardTitle>
                <CardDescription>Status of all books in the library.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Book Title</TableHead>
                            <TableHead>Author</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Copies</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {DUMMY_BOOKS.map(book => (
                            <TableRow key={book.id}>
                                <TableCell className="font-medium">{book.title}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>
                                    <span className={cn("px-2 py-1 rounded-full text-xs", book.status === 'Available' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300')}>
                                        {book.status}
                                    </span>
                                </TableCell>
                                <TableCell>{book.copies}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
);
