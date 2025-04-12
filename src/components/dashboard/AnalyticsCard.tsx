
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowUpRight, ArrowDownRight, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AnalyticsCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    positive: boolean;
  };
  icon: LucideIcon;
  iconColor: string;
}

export const AnalyticsCard = ({
  title,
  value,
  change,
  icon: Icon,
  iconColor,
}: AnalyticsCardProps) => {
  // Map color names to tailwind class name prefixes
  const getColorClass = (color: string, type: 'bg' | 'text') => {
    const colorMap: Record<string, string> = {
      green: `${type}-emerald-500`,
      blue: `${type}-blue-500`,
      orange: `${type}-amber-500`,
      purple: `${type}-violet-500`,
      red: `${type}-red-500`,
    };
    
    return colorMap[color] || `${type}-gray-500`;
  };
  
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div 
          className={cn(
            "p-2 rounded-full",
            getColorClass(iconColor, 'bg').replace('500', '100')
          )}
        >
          <Icon className={cn("h-4 w-4", getColorClass(iconColor, 'text'))} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className="flex items-center mt-1">
            {change.positive ? (
              <ArrowUpRight className="h-4 w-4 text-emerald-500 mr-1" />
            ) : (
              <ArrowDownRight className="h-4 w-4 text-amber-500 mr-1" />
            )}
            <span
              className={cn(
                "text-xs font-medium",
                change.positive ? "text-emerald-500" : "text-amber-500"
              )}
            >
              {Math.abs(change.value)}%
            </span>
            <span className="text-xs text-muted-foreground ml-1">from last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
