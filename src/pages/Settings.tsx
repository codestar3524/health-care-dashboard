
import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Bell, Lock, User as UserIcon, Globe, Shield, PenSquare } from 'lucide-react';

const Settings = () => {
  return (
    <div className="dashboard-layout">
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content md:ml-64">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="mb-6 grid grid-cols-4 sm:grid-cols-5 md:w-[600px]">
              <TabsTrigger value="profile" className="flex items-center">
                <UserIcon className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="account" className="flex items-center">
                <PenSquare className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Account</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center">
                <Bell className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center">
                <Lock className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Privacy</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center">
                <Shield className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Security</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>Update your profile details and public information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
                      <AvatarFallback>DP</AvatarFallback>
                    </Avatar>
                    <div className="space-y-1">
                      <h3 className="text-sm font-medium leading-none">Profile picture</h3>
                      <p className="text-sm text-muted-foreground">JPG, GIF or PNG. Max size of 3MB</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Upload</Button>
                        <Button variant="outline" size="sm">Remove</Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" defaultValue="Daniel" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" defaultValue="Peterson" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" defaultValue="daniel@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea 
                      id="bio" 
                      placeholder="Tell us about yourself" 
                      defaultValue="Experienced developer with expertise in Next.js and TypeScript"
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input id="location" defaultValue="San Francisco, CA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" type="url" placeholder="https://example.com" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save changes</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="notifications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                  <CardDescription>Manage how we contact you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                      <span>Email notifications</span>
                      <span className="font-normal text-muted-foreground text-xs">Receive emails about your account activity</span>
                    </Label>
                    <Switch id="email-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="marketing-emails" className="flex flex-col space-y-1">
                      <span>Marketing emails</span>
                      <span className="font-normal text-muted-foreground text-xs">Receive emails about new products and features</span>
                    </Label>
                    <Switch id="marketing-emails" />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="social-notifications" className="flex flex-col space-y-1">
                      <span>Social notifications</span>
                      <span className="font-normal text-muted-foreground text-xs">Receive notifications when someone mentions you</span>
                    </Label>
                    <Switch id="social-notifications" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="security-notifications" className="flex flex-col space-y-1">
                      <span>Security notifications</span>
                      <span className="font-normal text-muted-foreground text-xs">Receive notifications about security alerts</span>
                    </Label>
                    <Switch id="security-notifications" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save preferences</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="privacy" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Privacy Settings</CardTitle>
                  <CardDescription>Manage your privacy preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="public-profile" className="flex flex-col space-y-1">
                      <span>Public profile</span>
                      <span className="font-normal text-muted-foreground text-xs">Make your profile visible to everyone</span>
                    </Label>
                    <Switch id="public-profile" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="show-email" className="flex flex-col space-y-1">
                      <span>Show email</span>
                      <span className="font-normal text-muted-foreground text-xs">Show your email address on your public profile</span>
                    </Label>
                    <Switch id="show-email" />
                  </div>
                  <div className="flex items-center justify-between space-x-2">
                    <Label htmlFor="analytics-cookies" className="flex flex-col space-y-1">
                      <span>Analytics cookies</span>
                      <span className="font-normal text-muted-foreground text-xs">Allow us to collect usage data to improve our service</span>
                    </Label>
                    <Switch id="analytics-cookies" defaultChecked />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save settings</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="security" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Password</CardTitle>
                  <CardDescription>Change your password</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Current password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="new-password">New password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirm password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Update password</Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Two-factor authentication</CardTitle>
                  <CardDescription>Add an extra layer of security to your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Two-factor authentication</div>
                      <div className="text-sm text-muted-foreground">Protect your account with two-factor authentication</div>
                    </div>
                    <Button variant="outline">Set up</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="account" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Account Settings</CardTitle>
                  <CardDescription>Manage your account settings and preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input id="username" defaultValue="danielpeterson" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="language">Language</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="en-US">English (US)</option>
                      <option value="en-GB">English (UK)</option>
                      <option value="es">Spanish</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timezone">Timezone</Label>
                    <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="pst">Pacific Time (PST)</option>
                      <option value="est">Eastern Time (EST)</option>
                      <option value="utc">Coordinated Universal Time (UTC)</option>
                      <option value="gmt">Greenwich Mean Time (GMT)</option>
                    </select>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save settings</Button>
                </CardFooter>
              </Card>
              
              <Card className="border-red-300">
                <CardHeader>
                  <CardTitle className="text-red-500">Danger Zone</CardTitle>
                  <CardDescription>Irreversible and destructive actions</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="font-medium">Delete account</div>
                      <div className="text-sm text-muted-foreground">
                        Permanently delete your account and all your data
                      </div>
                    </div>
                    <Button variant="destructive">Delete</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
