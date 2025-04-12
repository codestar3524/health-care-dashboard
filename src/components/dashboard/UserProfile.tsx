
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Mail, MapPin } from 'lucide-react';

export const UserProfile = () => {
  return (
    <Card className="shadow-sm h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Your Profile</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center text-center">
        <Avatar className="h-20 w-20 mb-3">
          <AvatarImage src="https://github.com/shadcn.png" alt="User profile" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
        <h3 className="font-medium text-lg">Daniel Peterson</h3>
        <Badge className="mt-1 mb-2">Administrator</Badge>
        <p className="text-sm text-muted-foreground mb-4 max-w-[250px]">
          Experienced developer with expertise in Next.js and TypeScript
        </p>
        <div className="w-full space-y-2 text-sm">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Mail size={14} />
            <span>daniel@example.com</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <MapPin size={14} />
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Calendar size={14} />
            <span>Joined April 2023</span>
          </div>
        </div>
        <Button className="w-full mt-4">Edit Profile</Button>
      </CardContent>
    </Card>
  );
};
