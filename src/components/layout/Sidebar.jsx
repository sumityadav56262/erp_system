import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { cn } from '../../lib/utils';
import {
    HomeIcon, UsersIcon, BookOpenIcon, DollarSignIcon, CalendarIcon, FileTextIcon,
    LibraryIcon, BarChartIcon, SettingsIcon, GraduationCapIcon, PanelLeftCloseIcon, PanelLeftOpenIcon
} from '../icons';

export const Sidebar = () => {
    const { userRole, currentPage, setCurrentPage, isSidebarOpen, setSidebarOpen, isSidebarCollapsed, setIsSidebarCollapsed } = useContext(AppContext);
    
    const navLinks = {
        admin: [
            { path: '/dashboard', label: 'Dashboard', icon: HomeIcon },
            { path: '/students', label: 'Students', icon: UsersIcon },
            { path: '/faculty', label: 'Faculty', icon: UsersIcon },
            { path: '/courses', label: 'Courses', icon: BookOpenIcon },
            { path: '/finance', label: 'Finance', icon: DollarSignIcon },
            { path: '/library', label: 'Library', icon: LibraryIcon },
            { path: '/exams', label: 'Exams', icon: FileTextIcon },
            { path: '/hr', label: 'HR', icon: UsersIcon },
            { path: '/analytics', label: 'Analytics', icon: BarChartIcon },
            { path: '/settings', label: 'Settings', icon: SettingsIcon },
        ],
        student: [
            { path: '/dashboard', label: 'Dashboard', icon: HomeIcon },
            { path: '/courses', label: 'My Courses', icon: BookOpenIcon },
            { path: '/attendance', label: 'Attendance', icon: CalendarIcon },
            { path: '/assignments', label: 'Assignments', icon: FileTextIcon },
            { path: '/results', label: 'Results', icon: GraduationCapIcon },
            { path: '/fees', label: 'Fees', icon: DollarSignIcon },
            { path: '/library', label: 'Library', icon: LibraryIcon },
            { path: '/profile', label: 'Profile', icon: UsersIcon },
        ],
        teacher: [
            { path: '/dashboard', label: 'Dashboard', icon: HomeIcon },
            { path: '/courses', label: 'Assigned Courses', icon: BookOpenIcon },
            { path: '/timetable', label: 'Timetable', icon: CalendarIcon },
            { path: '/attendance', label: 'Attendance', icon: CalendarIcon },
            { path: '/assignments', label: 'Assignments', icon: FileTextIcon },
            { path: '/performance-reports', label: 'Student Performance', icon: BarChartIcon },
            { path: '/profile', label: 'Profile', icon: UsersIcon },
        ],
        accountant: [
            { path: '/dashboard', label: 'Dashboard', icon: HomeIcon },
            { path: '/fees', label: 'Fee Collection', icon: DollarSignIcon },
            { path: '/dues', label: 'Pending Dues', icon: FileTextIcon },
            { path: '/reports', label: 'Financial Reports', icon: BarChartIcon },
            { path: '/settings', label: 'Settings', icon: SettingsIcon },
        ],
        librarian: [
            { path: '/dashboard', label: 'Dashboard', icon: HomeIcon },
            { path: '/issue-return', label: 'Issue / Return', icon: BookOpenIcon },
            { path: '/books', label: 'Manage Books', icon: LibraryIcon },
            { path: '/members', label: 'Manage Members', icon: UsersIcon },
        ],
        exam_officer: [
            { path: '/dashboard', label: 'Dashboard', icon: HomeIcon },
            { path: '/schedule', label: 'Schedule Exams', icon: CalendarIcon },
            { path: '/results', label: 'Publish Results', icon: GraduationCapIcon },
            { path: '/analytics', label: 'Performance Analytics', icon: BarChartIcon },
        ],
    };
    
    const roleNavLinks = navLinks[userRole] || [];

    return (
        <>
            <aside className={cn(
                "fixed top-0 left-0 z-40 h-screen bg-card border-r transition-all duration-300 ease-in-out",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full",
                "md:translate-x-0",
                isSidebarCollapsed ? "w-20" : "w-64"
            )}>
                <div className="h-full flex flex-col">
                    <div className={cn("flex-1 px-3 py-4 overflow-y-auto", isSidebarCollapsed ? "no-scrollbar" : "")}>
                        <div className={cn("flex items-center mb-5", isSidebarCollapsed ? 'justify-center' : 'pl-2.5')}>
                           <GraduationCapIcon className="h-8 w-8 text-primary shrink-0" />
                            <span className={cn("self-center text-xl font-semibold whitespace-nowrap ml-2", isSidebarCollapsed && "hidden")}>CollegeName ERP</span>
                        </div>
                        <ul className="space-y-2">
                            {roleNavLinks.map(link => (
                                <li key={link.path}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setCurrentPage(link.path);
                                            if (window.innerWidth < 768) setSidebarOpen(false);
                                        }}
                                        className={cn(
                                            "flex items-center p-2 text-base font-normal rounded-lg hover:bg-accent",
                                            currentPage === link.path ? "bg-accent text-accent-foreground" : "text-card-foreground",
                                            isSidebarCollapsed && "justify-center"
                                        )}
                                    >
                                        <link.icon className="w-6 h-6 shrink-0" />
                                        <span className={cn("ml-3 whitespace-nowrap", isSidebarCollapsed && "hidden")}>{link.label}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden md:block p-2 border-t">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                setIsSidebarCollapsed(!isSidebarCollapsed);
                            }}
                            className={cn(
                                "flex items-center p-2 text-base font-normal rounded-lg hover:bg-accent text-card-foreground",
                                isSidebarCollapsed && "justify-center"
                            )}
                        >
                            {isSidebarCollapsed ? <PanelLeftOpenIcon className="w-6 h-6 shrink-0" /> : <PanelLeftCloseIcon className="w-6 h-6 shrink-0" />}
                            <span className={cn("ml-3 whitespace-nowrap", isSidebarCollapsed && "hidden")}>Collapse</span>
                        </a>
                    </div>
                </div>
            </aside>
            {isSidebarOpen && <div onClick={() => setSidebarOpen(false)} className="fixed inset-0 bg-black/50 z-30 md:hidden"></div>}
        </>
    );
};
