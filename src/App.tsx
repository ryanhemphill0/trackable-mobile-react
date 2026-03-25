import { useState } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Screens
import ContactsScreen from './screens/ContactsScreen';
import ContactDetailScreen from './screens/ContactDetailScreen';
import ActivitiesScreen from './screens/ActivitiesScreen';
import ActivityDetailScreen from './screens/ActivityDetailScreen';
import TasksScreen from './screens/TasksScreen';
import AnalyticsScreen from './screens/AnalyticsScreen';
import MarketingDashboard from './screens/MarketingDashboard';
import PatientsDashboard from './screens/PatientsDashboard';
import MoreScreen from './screens/MoreScreen';
import NotificationsScreen from './screens/NotificationsScreen';

function App() {
  const [workspace, setWorkspace] = useState('Affordable Family Dental');

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Navigate to="/contacts" replace />} />
          <Route 
            path="/contacts" 
            element={<ContactsScreen workspace={workspace} onWorkspaceChange={setWorkspace} />} 
          />
          <Route 
            path="/contact/:id" 
            element={<ContactDetailScreen workspace={workspace} />} 
          />
          <Route 
            path="/contact/:id/activities" 
            element={<ActivityDetailScreen workspace={workspace} />} 
          />
          <Route 
            path="/activities" 
            element={<ActivitiesScreen workspace={workspace} onWorkspaceChange={setWorkspace} />} 
          />
          <Route 
            path="/activity/detail" 
            element={<ActivityDetailScreen workspace={workspace} />} 
          />
          <Route 
            path="/tasks" 
            element={<TasksScreen workspace={workspace} onWorkspaceChange={setWorkspace} />} 
          />
          <Route 
            path="/analytics" 
            element={<AnalyticsScreen workspace={workspace} onWorkspaceChange={setWorkspace} />} 
          />
          <Route path="/dashboard/marketing" element={<MarketingDashboard />} />
          <Route path="/dashboard/patients" element={<PatientsDashboard />} />
          <Route 
            path="/more" 
            element={<MoreScreen workspace={workspace} onWorkspaceChange={setWorkspace} />} 
          />
          <Route 
            path="/notifications" 
            element={<NotificationsScreen workspace={workspace} onWorkspaceChange={setWorkspace} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
