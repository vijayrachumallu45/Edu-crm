import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useEduContext } from '../context/EduContext';
import { AppLayout } from '../components/layout/AppLayout';

import { LoginPage } from '../pages/Auth/LoginPage';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { EnquiriesListPage } from '../pages/Enquiries/EnquiriesListPage';
import { EnquiryDetailPage } from '../pages/Enquiries/EnquiryDetailPage';
import { StudentsListPage } from '../pages/Students/StudentsListPage';
import { StudentDetailPage } from '../pages/Students/StudentDetailPage';
import { AdmissionsPage } from '../pages/Admissions/AdmissionsPage';
import { CoursesPage } from '../pages/Courses/CoursesPage';
import { CounsellingPage } from '../pages/Counselling/CounsellingPage';
import { FollowUpsPage } from '../pages/FollowUps/FollowUpsPage';
import { CampaignsPage } from '../pages/Campaigns/CampaignsPage';
import { FeesPage } from '../pages/Fees/FeesPage';
import { SupportPage } from '../pages/Support/SupportPage';
import { FeedbackPage } from '../pages/Feedback/FeedbackPage';
import { AnalyticsPage } from '../pages/Analytics/AnalyticsPage';
import { SettingsPage } from '../pages/Settings/SettingsPage';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useEduContext();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="enquiries" element={<EnquiriesListPage />} />
        <Route path="enquiries/:id" element={<EnquiryDetailPage />} />
        <Route path="students" element={<StudentsListPage />} />
        <Route path="students/:id" element={<StudentDetailPage />} />
        <Route path="admissions" element={<AdmissionsPage />} />
        <Route path="courses" element={<CoursesPage />} />
        <Route path="counselling" element={<CounsellingPage />} />
        <Route path="follow-ups" element={<FollowUpsPage />} />
        <Route path="campaigns" element={<CampaignsPage />} />
        <Route path="fees" element={<FeesPage />} />
        <Route path="support" element={<SupportPage />} />
        <Route path="feedback" element={<FeedbackPage />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
