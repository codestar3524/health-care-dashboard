
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  BarChart2, 
  Users, 
  Settings, 
  HelpCircle, 
  Menu, 
  X, 
  LogOut,
  Terminal
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  href: string;
  active?: boolean;
  collapsed?: boolean;
}

const SidebarItem = ({ icon: Icon, label, href, active = false, collapsed = false }: SidebarItemProps) => {
  return (
    <Link to={href}>
      <Button 
        variant="ghost" 
        className={cn(
          "w-full justify-start mb-1",
          collapsed ? "px-2" : "px-4",
          active 
            ? "bg-sidebar-accent text-sidebar-accent-foreground" 
            : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sidebar-foreground"
        )}
      >
        <Icon size={20} className={cn(collapsed ? "mx-auto" : "mr-3")} />
        {!collapsed && <span>{label}</span>}
      </Button>
    </Link>
  );
};

export const Sidebar = () => {
  const isMobile = useIsMobile();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const toggleSidebar = () => {
    if (isMobile) {
      setMobileOpen(!mobileOpen);
    } else {
      setCollapsed(!collapsed);
    }
  };
  
  return (
    <>
      {/* Mobile toggle */}
      <div className="fixed top-4 left-4 z-30 md:hidden">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={toggleSidebar}
          className="bg-white shadow-sm"
        >
          <Menu size={20} />
        </Button>
      </div>
      
      {/* Sidebar */}
      <aside 
        className={cn(
          "bg-sidebar fixed z-20 h-full transition-all duration-300 flex flex-col shadow-lg",
          isMobile 
            ? mobileOpen 
              ? "left-0 w-64" 
              : "-left-64 w-64" 
            : collapsed 
              ? "w-16" 
              : "w-64"
        )}
      >
        {/* Sidebar header */}
        <div className={cn(
          "h-16 flex items-center px-4 border-b border-sidebar-border",
          collapsed ? "justify-center" : "justify-between"
        )}>
          {!collapsed && (
            <div className="flex items-center">
              <Terminal size={24} className="text-sidebar-primary" />
              <span className="font-semibold ml-2 text-sidebar-foreground">FairDash</span>
            </div>
          )}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar}
            className="text-sidebar-foreground hover:bg-sidebar-accent"
          >
            {isMobile ? <X size={20} /> : collapsed ? <Menu size={18} /> : <X size={18} />}
          </Button>
        </div>
        
        {/* Sidebar items */}
        <div className="flex-1 overflow-y-auto p-2">
          <nav className="space-y-1">
            <SidebarItem 
              icon={Home} 
              label="Dashboard" 
              href="/" 
              active 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={BarChart2} 
              label="Analytics" 
              href="/analytics" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={Users} 
              label="Users" 
              href="/users" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={Settings} 
              label="Settings" 
              href="/settings" 
              collapsed={collapsed} 
            />
            <SidebarItem 
              icon={HelpCircle} 
              label="Help" 
              href="/help" 
              collapsed={collapsed} 
            />
          </nav>
        </div>
        
        {/* Sidebar footer */}
        <div className={cn(
          "p-4 border-t border-sidebar-border",
          collapsed ? "flex justify-center" : ""
        )}>
          <Button 
            variant="ghost" 
            className={cn(
              "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              collapsed ? "px-2" : "px-4"
            )}
          >
            <LogOut size={20} className={cn(collapsed ? "mx-auto" : "mr-3")} />
            {!collapsed && <span>Log out</span>}
          </Button>
        </div>
      </aside>
      
      {/* Overlay for mobile */}
      {isMobile && mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
};
