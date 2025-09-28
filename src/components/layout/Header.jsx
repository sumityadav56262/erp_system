import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Button } from '../ui/Button';
import { Switch } from '../ui/Switch';
import { LogOutIcon, MenuIcon } from '../icons';

export const Header = () => {
    const { theme, setTheme, userRole, handleLogout, setSidebarOpen } = useContext(AppContext);

    return (
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                     <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setSidebarOpen(true)}>
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                    <div className="flex-1">
                        <h1 className="text-lg font-semibold uppercase">{userRole} Dashboard</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <p>Welcome, {userRole}!</p>
                        <Switch
                            checked={theme === 'dark'}
                            onCheckedChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
                        />
                         <Button variant="ghost" size="icon" onClick={handleLogout}>
                            <LogOutIcon className="h-5 w-5" />
                         </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
