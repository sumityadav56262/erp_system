import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';

export const LoginPage = () => {
    const { handleLogin } = useContext(AppContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-md">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">College ERP Login</CardTitle>
                        <CardDescription className="text-center">For Demo: Choose a role to log in</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email or Student ID</Label>
                            <Input id="email" type="email" placeholder="user@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="********" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col">
                        <Button className="w-full" onClick={() => handleLogin(email, password)}>Login as Admin</Button>
                        <a href="#" className="text-sm text-primary hover:underline mt-4">Forgot Password?</a>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
