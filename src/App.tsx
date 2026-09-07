import React, { useEffect } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Public Pages
import { HomePage } from './pages/HomePage';
import { MessagesPage } from './pages/MessagesPage';
import { EditorialPage } from './pages/EditorialPage';
import { UnionReportPage } from './pages/UnionReportPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { LiteraryPage } from './pages/LiteraryPage';
import { CreativeDetailPage } from './pages/CreativeDetailPage';
import { AchieversPage } from './pages/AchieversPage';
import { GalleryPage } from './pages/GalleryPage';
import { ArchivePage } from './pages/ArchivePage';
import { AboutPage } from './pages/AboutPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Admin Suite
import { AdminLayout } from './pages/admin/AdminLayout';
import { AdminLoginPage } from './pages/admin/AdminLoginPage';
import { AdminDashboardPage } from './pages/admin/AdminDashboardPage';
import { AdminHomepageBuilderPage } from './pages/admin/AdminHomepageBuilderPage';
import { AdminPeoplePage } from './pages/admin/AdminPeoplePage';
import { AdminSettingsPage } from './pages/admin/AdminSettingsPage';
import { AdminMessagesPage } from './pages/admin/AdminMessagesPage';
import { AdminUnionPage } from './pages/admin/AdminUnionPage';
import { AdminEventsPage } from './pages/admin/AdminEventsPage';
import { AdminCreativePage } from './pages/admin/AdminCreativePage';
import { AdminAchieversPage } from './pages/admin/AdminAchieversPage';
import { AdminMediaPage } from './pages/admin/AdminMediaPage';

import { authService } from './services/authService';

// Scroll to top automatically on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Protected Admin Route Guard
const ProtectedAdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isAuth = authService.isAuthenticated();
  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }
  return <>{children}</>;
};

export const App: React.FC = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div className="flex flex-col min-h-screen bg-[#FAF8F4] font-sans selection:bg-[#C5A059] selection:text-white">
      <ScrollToTop />
      
      {/* Hide public Navbar on Admin pages */}
      {!isAdminRoute && <Navbar />}

      <main className="flex-grow">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<HomePage />} />
          <Route path="/messages" element={<MessagesPage />} />
          <Route path="/editorial" element={<EditorialPage />} />
          <Route path="/union-report" element={<UnionReportPage />} />
          <Route path="/union" element={<UnionReportPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/events/:slug" element={<EventDetailPage />} />
          <Route path="/creative" element={<LiteraryPage />} />
          <Route path="/literary" element={<LiteraryPage />} />
          <Route path="/creative/:slug" element={<CreativeDetailPage />} />
          <Route path="/achievers" element={<AchieversPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/artwork" element={<GalleryPage />} />
          <Route path="/archive" element={<ArchivePage />} />
          <Route path="/magazine" element={<ArchivePage />} />
          <Route path="/about" element={<AboutPage />} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin"
            element={
              <ProtectedAdminRoute>
                <AdminLayout />
              </ProtectedAdminRoute>
            }
          >
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboardPage />} />
            <Route path="homepage" element={<AdminHomepageBuilderPage />} />
            <Route path="people" element={<AdminPeoplePage />} />
            <Route path="settings" element={<AdminSettingsPage />} />
            <Route path="messages" element={<AdminMessagesPage />} />
            <Route path="union" element={<AdminUnionPage />} />
            <Route path="events" element={<AdminEventsPage />} />
            <Route path="creative" element={<AdminCreativePage />} />
            <Route path="achievers" element={<AdminAchieversPage />} />
            <Route path="media" element={<AdminMediaPage />} />
          </Route>

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* Hide public Footer on Admin pages */}
      {!isAdminRoute && <Footer />}

      {/* Vercel Real-time Visitor Analytics */}
      <Analytics />
    </div>
  );
};

export default App;
