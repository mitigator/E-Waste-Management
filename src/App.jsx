import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import BookingDetails from "./components/bookings/BookingDetails";
import Drivers from "./pages/Drivers";
import DriverSignup from "./components/drivers/DriverSignup";
import LiveTracking from "./components/drivers/LiveTracking";
import Rides from "./pages/Rides";
import RideDetails from "./components/rides/RideDetails";
import Earnings from "./pages/Earnings";
import Layout from "./components/common/Layout";
import UserDashboard from "./pages/UserDashboard";
import BookingConfirmation from "./pages/BookingConfirmation";
import BookingHistory from "./pages/BookingHistory";
import BookPickup from "./pages/BookPickup";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SupportPage from "./pages/SupportPage";


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Bookings Routes */}
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/bookings/:id" element={<BookingDetails />} />

          {/* Drivers Routes */}
          <Route path="/drivers" element={<Drivers />} />
          <Route path="/drivers/signup" element={<DriverSignup />} />
          <Route path="/drivers/tracking" element={<LiveTracking />} />

          {/* Rides Routes */}
          <Route path="/rides" element={<Rides />} />
          <Route path="/rides/:id" element={<RideDetails />} />

          {/* Earnings Route */}
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/booking-confirmation" element={<BookingConfirmation />} />
          <Route path="/booking-history" element={<BookingHistory />} />
          <Route path="/book-pickup" element={<BookPickup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
