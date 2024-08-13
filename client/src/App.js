import './App.css';
import SigninPage from './components/SigninPage/SigninPage.js';
import RegisterPage from './components/RegisterPage/RegisterPage.js';
import Navbar from './components/Navbar/Navbar.js';

import BulkingDietPage from './components/Pages/BulkingDietPage.js';
import LeanBulkDietPage from './components/Pages/LeanBulkDietPage.js';
import CuttingDietPage from './components/Pages/CuttingDietPage.js';
import BMICalculator from './components/Pages/BMICalculator.js';
import WorkoutTracker from './components/Pages/WorkoutTracker.js';
import NutritionTracker from './components/Pages/NutritionTracker.js';
import MotivationQuotes from './components/Pages/MotivationQuotes.js';
import SupplementPage from './components/Pages/SupplementPage.js';
import StrengthTrainingPage from './components/Pages/StrengthTrainingPage.js';
import FlexibilityMobilityPage from './components/Pages/FlexibilityMobilityPage.js';
import CrossFitWorkoutsPage from './components/Pages/CrossFitWorkoutsPage.js';
import HomeWorkoutsPage from './components/Pages/HomeWorkoutsPage.js';
import Enquiry from './components/EnquiryPage/Enquiry.js'

import FrontSlidingAdvertisement from './components/FrontSlidingAdvertisement.js'
import ProgramPage from './components/Pages/ProgramPage.js';
import Footer from './components/Footer.js';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
  } 
  from "react-router-dom";
import HomePage from './components/HomePage/HomePage.js';

function App() {
  return (
    <div>
      <Router>
        
        <Routes>
            <Route path="/" element={<> <SigninPage/></>}/>
        </Routes>
        <Routes>
            <Route path="/home" element={<> 
            <Navbar/>
            <HomePage/>
            <FrontSlidingAdvertisement/>
            <ProgramPage/>
            
            </>}/>
        </Routes>
        <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
        </Routes> 
        <Routes>
            <Route path="/BulkingDietPage" element={<><Navbar/><BulkingDietPage/></>}/>
          </Routes> 
           <Routes>
            <Route path="/CuttingDietPage" element={<><Navbar/><CuttingDietPage/></>}/>
          </Routes> 
          <Routes>
            <Route path="/LeanBulkDietPage" element={<><Navbar/><LeanBulkDietPage/></>}/>
          </Routes>
          <Routes>
            <Route path="/BMICalculator" element={<><Navbar/><BMICalculator/></>}/>
          </Routes>
          <Routes>
            <Route path="/NutritionTracker" element={<><Navbar/><NutritionTracker/></>}/>
          </Routes>
          <Routes>
            <Route path="/WorkoutTracker" element={<><Navbar/><WorkoutTracker/></>}/>
          </Routes> 
          <Routes>
            <Route path="/SupplementPage" element={<><Navbar/><SupplementPage/></>}/>
          </Routes> 

          <Routes>
            <Route path="/MotivationQuotes" element={<><Navbar/><MotivationQuotes/></>}/>
          </Routes> 
          <Routes>
            <Route path="/StrengthTrainingPage" element={<><Navbar/><StrengthTrainingPage/></>}/>
          </Routes>
          <Routes>
            <Route path="/FlexibilityMobilityPage" element={<><Navbar/><FlexibilityMobilityPage/></>}/>
          </Routes>
          <Routes>
            <Route path="/CrossFitWorkoutsPage" element={<><Navbar/><CrossFitWorkoutsPage/></>}/>
          </Routes>
          <Routes>
            <Route path="/HomeWorkoutsPage" element={<><Navbar/><HomeWorkoutsPage/></>}/>
          </Routes>
          <Routes>
            <Route path="/enquiry" element={<><Navbar/><Enquiry/></>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
