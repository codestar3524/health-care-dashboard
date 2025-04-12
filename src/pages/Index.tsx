
import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Navbar } from '@/components/dashboard/Navbar';
import { AnalyticsCard } from '@/components/dashboard/AnalyticsCard';
import { ChartCard } from '@/components/dashboard/ChartCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { UserProfile } from '@/components/dashboard/UserProfile';
import { Users, BarChart2, DollarSign, ShoppingCart } from 'lucide-react';

const Index = () => {
  // Sample data for the charts
  const lineChartData = [
    { name: 'Jan', value: 34 },
    { name: 'Feb', value: 45 },
    { name: 'Mar', value: 31 },
    { name: 'Apr', value: 65 },
    { name: 'May', value: 49 },
    { name: 'Jun', value: 62 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 55 },
    { name: 'Sep', value: 78 },
    { name: 'Oct', value: 57 },
    { name: 'Nov', value: 48 },
    { name: 'Dec', value: 88 },
  ];
  
  const barChartData = [
    { name: 'Q1', product: 120, service: 85, affiliate: 45 },
    { name: 'Q2', product: 145, service: 90, affiliate: 35 },
    { name: 'Q3', product: 105, service: 75, affiliate: 55 },
    { name: 'Q4', product: 190, service: 120, affiliate: 70 },
  ];
  
  return (
    <div className="dashboard-layout">
      <Navbar />
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content ml-0 md:ml-64">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
          
          {/* Stats row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <AnalyticsCard
              title="Total Users"
              value="14,560"
              change={{ value: 12.5, positive: true }}
              icon={Users}
              iconColor="blue"
            />
            <AnalyticsCard
              title="Total Revenue"
              value="$94,251"
              change={{ value: 8.2, positive: true }}
              icon={DollarSign}
              iconColor="green"
            />
            <AnalyticsCard
              title="Active Sessions"
              value="2,845"
              change={{ value: 3.1, positive: false }}
              icon={BarChart2}
              iconColor="purple"
            />
            <AnalyticsCard
              title="Conversion Rate"
              value="3.24%"
              change={{ value: 1.8, positive: true }}
              icon={ShoppingCart}
              iconColor="orange"
            />
          </div>
          
          {/* Charts row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
            <ChartCard 
              title="Monthly Revenue" 
              data={lineChartData} 
              type="line" 
            />
            <ChartCard 
              title="Quarterly Revenue by Type" 
              data={barChartData} 
              type="bar"
              categories={["product", "service", "affiliate"]}
            />
          </div>
          
          {/* Bottom row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2">
              <RecentActivity />
            </div>
            <div>
              <UserProfile />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
