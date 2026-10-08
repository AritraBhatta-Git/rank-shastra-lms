import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Admission from './pages/Admission';
import AdmissionForm from './pages/AdmissionForm';
import OfflineAdmission from './pages/OfflineAdmission';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import BookAppointment from './pages/BookAppointment';
import FacultyDetails from './pages/FacultyDetails';
import ScrollToTop from './components/ScrollToTop';

const AppContent = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      {!isAdminPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/online" element={<AdmissionForm />} />
          <Route path="/admission/offline" element={<OfflineAdmission />} />
          <Route path="/about" element={<About />} />
          <Route path="/faculty" element={<FacultyDetails />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
