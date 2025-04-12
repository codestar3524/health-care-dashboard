
import React, { useState } from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, UserPlus, MoreHorizontal, Mail, Phone, User as UserIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from '@/components/ui/badge';

// Mock user data
const users = [
  {
    id: '1',
    name: 'Olivia Martin',
    email: 'olivia.martin@example.com',
    role: 'Admin',
    status: 'Active',
    lastActive: '2 minutes ago',
    avatarUrl: 'https://github.com/shadcn.png',
  },
  {
    id: '2',
    name: 'Jackson Lee',
    email: 'jackson.lee@example.com',
    role: 'User',
    status: 'Active',
    lastActive: '5 hours ago',
    avatarUrl: '',
  },
  {
    id: '3',
    name: 'Isabella Nguyen',
    email: 'isabella.nguyen@example.com',
    role: 'User',
    status: 'Offline',
    lastActive: '2 days ago',
    avatarUrl: '',
  },
  {
    id: '4',
    name: 'William Chen',
    email: 'william.chen@example.com',
    role: 'Moderator',
    status: 'Active',
    lastActive: '1 hour ago',
    avatarUrl: '',
  },
  {
    id: '5',
    name: 'Sofia Rodriguez',
    email: 'sofia.rodriguez@example.com',
    role: 'User',
    status: 'Offline',
    lastActive: '5 days ago',
    avatarUrl: '',
  }
];

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter users based on search term
  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="dashboard-layout">
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content md:ml-64">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <h1 className="text-2xl font-bold">Users</h1>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none sm:min-w-[240px]">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search users..."
                  className="pl-8 w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button>
                <UserPlus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </div>
          </div>

          <div className="bg-white rounded-lg border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b bg-muted/30">
                    <th className="text-left text-muted-foreground text-xs font-medium px-4 py-3 uppercase tracking-wider">User</th>
                    <th className="text-left text-muted-foreground text-xs font-medium px-4 py-3 uppercase tracking-wider">Role</th>
                    <th className="text-left text-muted-foreground text-xs font-medium px-4 py-3 uppercase tracking-wider">Status</th>
                    <th className="text-left text-muted-foreground text-xs font-medium px-4 py-3 uppercase tracking-wider">Last Active</th>
                    <th className="text-left text-muted-foreground text-xs font-medium px-4 py-3 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredUsers.map((user) => (
                    <tr key={user.id} className="hover:bg-muted/30">
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <Avatar className="h-8 w-8 mr-3">
                            <AvatarImage src={user.avatarUrl} alt={user.name} />
                            <AvatarFallback>{user.name.charAt(0)}{user.name.split(' ')[1]?.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <Badge variant={user.role === 'Admin' ? 'default' : (user.role === 'Moderator' ? 'outline' : 'secondary')}>
                          {user.role}
                        </Badge>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center">
                          <div className={`w-2 h-2 rounded-full mr-2 ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-300'}`} />
                          <span>{user.status}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm text-muted-foreground">
                        {user.lastActive}
                      </td>
                      <td className="px-4 py-3">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                              <span className="sr-only">Open menu</span>
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-white">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="cursor-pointer">
                              <UserIcon className="mr-2 h-4 w-4" />
                              View profile
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Mail className="mr-2 h-4 w-4" />
                              Send email
                            </DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">
                              <Phone className="mr-2 h-4 w-4" />
                              Call user
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredUsers.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  No users found that match your search criteria.
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between px-4 py-3 border-t">
              <div className="text-sm text-muted-foreground">
                Showing <span className="font-medium">{filteredUsers.length}</span> of <span className="font-medium">{users.length}</span> users
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled={filteredUsers.length === users.length}>
                  Previous
                </Button>
                <Button variant="outline" size="sm" disabled={filteredUsers.length === users.length}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
