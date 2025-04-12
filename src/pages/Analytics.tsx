
import React from 'react';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { AnalyticsCard } from '@/components/dashboard/AnalyticsCard';
import { ChartCard } from '@/components/dashboard/ChartCard';
import { 
  BarChart2, 
  Users, 
  ActivitySquare, 
  Heart, 
  Stethoscope, 
  Brain, 
  Droplet
} from 'lucide-react';

const Analytics = () => {
  // Sample healthcare data
  const patientTrendsData = [
    { name: 'Jan', value: 65 },
    { name: 'Feb', value: 59 },
    { name: 'Mar', value: 80 },
    { name: 'Apr', value: 81 },
    { name: 'May', value: 56 },
    { name: 'Jun', value: 55 },
    { name: 'Jul', value: 40 },
    { name: 'Aug', value: 70 },
    { name: 'Sep', value: 90 },
    { name: 'Oct', value: 73 },
    { name: 'Nov', value: 68 },
    { name: 'Dec', value: 75 },
  ];
  
  const diagnosisDistributionData = [
    { name: 'Cardiovascular', heart: 32, brain: 0, respiratory: 0, diabetes: 0 },
    { name: 'Neurological', heart: 0, brain: 28, respiratory: 0, diabetes: 0 },
    { name: 'Respiratory', heart: 0, brain: 0, respiratory: 19, diabetes: 0 },
    { name: 'Diabetes', heart: 0, brain: 0, respiratory: 0, diabetes: 23 },
    { name: 'Other', heart: 5, brain: 8, respiratory: 12, diabetes: 7 },
  ];
  
  const ageDistributionData = [
    { name: '0-17', value: 12 },
    { name: '18-34', value: 18 },
    { name: '35-50', value: 29 },
    { name: '51-65', value: 24 },
    { name: '66+', value: 17 },
  ];

  const treatmentSuccessData = [
    { name: 'Jan', success: 68, partial: 18, nonResponsive: 14 },
    { name: 'Feb', success: 72, partial: 16, nonResponsive: 12 },
    { name: 'Mar', success: 76, partial: 14, nonResponsive: 10 },
    { name: 'Apr', success: 69, partial: 21, nonResponsive: 10 },
    { name: 'May', success: 74, partial: 16, nonResponsive: 10 },
    { name: 'Jun', success: 78, partial: 14, nonResponsive: 8 },
  ];
  
  return (
    <div className="dashboard-layout">
      <div className="dashboard-main">
        <Sidebar />
        <div className="dashboard-content md:ml-64">
          <h1 className="text-2xl font-bold mb-6">Healthcare Analytics</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <AnalyticsCard 
              title="Patient Count" 
              value="2,846" 
              change={{ value: 8.5, positive: true }}
              icon={Users}
              iconColor="blue" 
            />
            <AnalyticsCard 
              title="Diagnosis Accuracy" 
              value="94.2%" 
              change={{ value: 2.1, positive: true }}
              icon={Brain}
              iconColor="purple" 
            />
            <AnalyticsCard 
              title="Avg. Recovery Rate" 
              value="76.5%" 
              change={{ value: 3.2, positive: true }}
              icon={ActivitySquare}
              iconColor="green" 
            />
            <AnalyticsCard 
              title="Critical Cases" 
              value="183" 
              change={{ value: 1.8, positive: false }}
              icon={Heart}
              iconColor="red" 
            />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard 
              title="Monthly Patient Trends" 
              data={patientTrendsData} 
              type="line"
            />
            <ChartCard 
              title="Diagnosis Distribution" 
              data={diagnosisDistributionData} 
              type="bar"
              categories={["heart", "brain", "respiratory", "diabetes"]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <ChartCard 
              title="Treatment Success Rate" 
              data={treatmentSuccessData} 
              type="bar"
              categories={["success", "partial", "nonResponsive"]}
            />
            <ChartCard 
              title="Patient Age Distribution" 
              data={ageDistributionData} 
              type="line"
            />
          </div>
          
          <div className="dashboard-card">
            <div className="dashboard-card-title">Patient Metrics Comparison</div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-border">
                <thead>
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Metric</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">This Quarter</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Previous Quarter</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">Change</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-border">
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">Average Diagnosis Time</td>
                    <td className="px-4 py-3 whitespace-nowrap">4.2 hours</td>
                    <td className="px-4 py-3 whitespace-nowrap">6.8 hours</td>
                    <td className="px-4 py-3 whitespace-nowrap text-green-500">-38.2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">Readmission Rate</td>
                    <td className="px-4 py-3 whitespace-nowrap">5.4%</td>
                    <td className="px-4 py-3 whitespace-nowrap">7.1%</td>
                    <td className="px-4 py-3 whitespace-nowrap text-green-500">-23.9%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">AI Diagnosis Acceptance</td>
                    <td className="px-4 py-3 whitespace-nowrap">86.3%</td>
                    <td className="px-4 py-3 whitespace-nowrap">79.8%</td>
                    <td className="px-4 py-3 whitespace-nowrap text-green-500">+8.1%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">Treatment Plan Adherence</td>
                    <td className="px-4 py-3 whitespace-nowrap">92.7%</td>
                    <td className="px-4 py-3 whitespace-nowrap">88.5%</td>
                    <td className="px-4 py-3 whitespace-nowrap text-green-500">+4.7%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 whitespace-nowrap">Patient Satisfaction</td>
                    <td className="px-4 py-3 whitespace-nowrap">4.7/5.0</td>
                    <td className="px-4 py-3 whitespace-nowrap">4.3/5.0</td>
                    <td className="px-4 py-3 whitespace-nowrap text-green-500">+9.3%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
