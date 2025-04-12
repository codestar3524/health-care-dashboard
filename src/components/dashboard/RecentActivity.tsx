
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCheck, MessageSquare, Plus, FileText } from 'lucide-react';
import { cn } from '@/lib/utils';

type ActivityType = "message" | "task" | "document" | "new";

interface ActivityItemProps {
  type: ActivityType;
  title: string;
  description: string;
  time: string;
  user?: {
    name: string;
    avatar?: string;
    initials: string;
  };
}

const ActivityIcon = ({ type }: { type: ActivityType }) => {
  const icons = {
    message: <MessageSquare className="h-4 w-4" />,
    task: <CheckCheck className="h-4 w-4" />,
    document: <FileText className="h-4 w-4" />,
    new: <Plus className="h-4 w-4" />,
  };

  const colors = {
    message: "bg-dashboard-blue/10 text-dashboard-blue",
    task: "bg-dashboard-green/10 text-dashboard-green",
    document: "bg-dashboard-purple/10 text-dashboard-purple",
    new: "bg-dashboard-pink/10 text-dashboard-pink",
  };

  return (
    <div className={cn("p-2 rounded-full", colors[type])}>
      {icons[type]}
    </div>
  );
};

const ActivityItem = ({ type, title, description, time, user }: ActivityItemProps) => {
  return (
    <div className="flex items-start space-x-3 py-3">
      <ActivityIcon type={type} />
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{title}</p>
          <span className="text-xs text-muted-foreground">{time}</span>
        </div>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      {user && (
        <Avatar className="h-6 w-6">
          <AvatarImage src={user.avatar} />
          <AvatarFallback className="text-xs">{user.initials}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
};

export const RecentActivity = () => {
  const activities: ActivityItemProps[] = [
    {
      type: "message",
      title: "New message",
      description: "Anna commented on your post",
      time: "2m ago",
      user: {
        name: "Anna Smith",
        initials: "AS",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
      },
    },
    {
      type: "task",
      title: "Task completed",
      description: "You completed 'Update dashboard'",
      time: "1h ago",
    },
    {
      type: "document",
      title: "Document shared",
      description: "Robert shared a document with you",
      time: "5h ago",
      user: {
        name: "Robert Johnson",
        initials: "RJ",
      },
    },
    {
      type: "new",
      title: "New user registered",
      description: "A new user signed up to your platform",
      time: "1d ago",
    },
  ];

  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-0 divide-y divide-border">
          {activities.map((activity, i) => (
            <ActivityItem key={i} {...activity} />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
