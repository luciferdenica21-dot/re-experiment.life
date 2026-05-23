import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import AgencyCyclePage from './pages/AgencyCyclePage.jsx';
import ArticlesPage from './pages/ArticlesPage.jsx';
import CoachingPage from './pages/CoachingPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import HomePage from './pages/HomePage.jsx';
import MoneyMoneyPage from './pages/MoneyMoneyPage.jsx';
import OnlineCoursePage from './pages/OnlineCoursePage.jsx';
import OrgDeiPage from './pages/OrgDeiPage.jsx';
import OrgTeamPage from './pages/OrgTeamPage.jsx';
import AboutPage from './pages/AboutPage.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/online-course" element={<OnlineCoursePage />} />
        <Route path="/coaching" element={<CoachingPage />} />
        <Route path="/agency-cycle" element={<AgencyCyclePage />} />
        <Route path="/money-money" element={<MoneyMoneyPage />} />
        <Route path="/org-dei" element={<OrgDeiPage />} />
        <Route path="/org-team" element={<OrgTeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
