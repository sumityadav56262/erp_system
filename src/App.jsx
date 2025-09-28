import React, { useState, useEffect } from 'react';

import { AppContext } from './context/AppContext';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { GeminiModal } from './components/GeminiModal';

import { LoginPage } from './pages/LoginPage';
import { PlaceholderPage } from './pages/PlaceholderPage';
import { AdminDashboard } from './pages/dashboards/AdminDashboard';
import { StudentDashboard } from './pages/dashboards/StudentDashboard';
import { TeacherDashboard } from './pages/dashboards/TeacherDashboard';
import { AccountantDashboard } from './pages/dashboards/AccountantDashboard';
import { LibrarianDashboard } from './pages/dashboards/LibrarianDashboard';
import { ExamOfficerDashboard } from './pages/dashboards/ExamOfficerDashboard';
import { StudentListPage } from './pages/StudentListPage';
import { FacultyListPage } from './pages/FacultyListPage';
import { CourseListPage } from './pages/CourseListPage';
import { FinancePage } from './pages/FinancePage';


// --- Main App Component ---
const App = () => {
    const [theme, setTheme] = useState('light');
    const [userRole, setUserRole] = useState(null); // e.g., 'admin', 'student', 'teacher'
    const [currentPage, setCurrentPage] = useState('/login');
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [modalConfig, setModalConfig] = useState({ isOpen: false, isLoading: false, content: '', title: '' });

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove('light', 'dark');
        root.classList.add(theme);
    }, [theme]);

    const handleLogin = (role) => {
        setUserRole(role);
        setCurrentPage('/dashboard');
    };
    
    const handleLogout = () => {
        setUserRole(null);
        setCurrentPage('/login');
    };
    
    // --- Gemini API Call Function ---
    const callGeminiAPI = async (prompt, title) => {
        setModalConfig({ isOpen: true, isLoading: true, content: '', title });

        const apiKey = ""; // This will be provided by the execution environment
        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

        const payload = {
            contents: [{ parts: [{ text: prompt }] }],
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API call failed with status: ${response.status}`);
            }

            const data = await response.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (text) {
                setModalConfig({ isOpen: true, isLoading: false, content: text, title });
            } else {
                throw new Error("Invalid response structure from API.");
            }

        } catch (error) {
            console.error("Gemini API call error:", error);
            setModalConfig({ isOpen: true, isLoading: false, content: `Error: ${error.message}\n\nPlease check the console for more details.`, title: 'Error' });
        }
    };


    const renderPage = () => {
        if (!userRole) return <LoginPage />;
        
        switch(currentPage) {
            case '/dashboard':
                if (userRole === 'admin') return <AdminDashboard />;
                if (userRole === 'student') return <StudentDashboard />;
                if (userRole === 'teacher') return <TeacherDashboard />;
                if (userRole === 'accountant') return <AccountantDashboard />;
                if (userRole === 'librarian') return <LibrarianDashboard />;
                if (userRole === 'exam_officer') return <ExamOfficerDashboard />;
                return <PlaceholderPage title={`${userRole.charAt(0).toUpperCase() + userRole.slice(1)} Dashboard`} />;
            case '/students':
                return <StudentListPage />;
            case '/faculty':
                return <FacultyListPage />;
            case '/courses':
                return <CourseListPage />;
            case '/finance':
            case '/fees':
                 if (userRole === 'accountant') return <FinancePage />;
                 return <PlaceholderPage title="Finance & Fees" />;
            case '/dues':
                return <PlaceholderPage title="Pending Dues" />;
            case '/reports':
                return <PlaceholderPage title="Financial Reports" />;
            case '/library':
                 return <PlaceholderPage title="Library Management" />;
            case '/exams':
            case '/results':
                 return <PlaceholderPage title="Exams & Results" />;
            case '/attendance':
                return <PlaceholderPage title="Attendance" />;
            case '/timetable':
                return <PlaceholderPage title="Timetable" />;
            case '/assignments':
                 return <PlaceholderPage title="Assignments" />;
            case '/hr':
                 return <PlaceholderPage title="HR Management" />;
            case '/analytics':
            case '/performance-reports':
                 return <PlaceholderPage title="Analytics & Reports" />;
            case '/settings':
            case '/profile':
                 return <PlaceholderPage title="Settings & Profile" />;
            default:
                return <AdminDashboard />;
        }
    }
    
    const appContextValue = {
        theme, setTheme,
        userRole, setUserRole,
        currentPage, setCurrentPage,
        handleLogin, handleLogout,
        isSidebarOpen, setSidebarOpen,
        isSidebarCollapsed, setIsSidebarCollapsed,
        callGeminiAPI,
        modalConfig, setModalConfig,
    };

    if (!userRole) {
        return (
             <AppContext.Provider value={appContextValue}>
                <div className="bg-background text-foreground min-h-screen">
                    {renderPage()}
                </div>
            </AppContext.Provider>
        )
    }

    return (
        <AppContext.Provider value={appContextValue}>
            <div className="bg-background text-foreground flex h-screen">
                <GeminiModal />
                <Sidebar />
                <div className={`flex-1 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isSidebarCollapsed ? 'md:ml-20' : 'md:ml-64'}`}>
                    <Header />
                    <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                       {renderPage()}
                    </main>
                </div>
            </div>
        </AppContext.Provider>
    );
}

export default App;