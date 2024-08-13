/*rfc*/
import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">MDU Fitness</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="#"></Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Workout
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li><Link className="dropdown-item text-light" to="/StrengthTrainingPage">Strength Training Workouts</Link></li>
                  <li><Link className="dropdown-item text-light" to="/FlexibilityMobilityPage">Flexibility and Mobility Workouts</Link></li>
                  <li><Link className="dropdown-item text-light" to="/CrossFitWorkoutsPage">CrossFit Workouts</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item text-light" to="/HomeWorkoutsPage">Home Workouts</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Diet
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li><Link className="dropdown-item text-light" to="/BulkingDietPage">Bulking</Link></li>
                  <li><Link className="dropdown-item text-light" to="/CuttingDietPage">Cutting</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item text-light" to="/LeanBulkDietPage">Lean Bulk</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Trackers
                </Link>
                <ul className="dropdown-menu bg-dark">
                  <li><Link className="dropdown-item text-light" to="/BMICalculator">BMI calculator</Link></li>
                  <li><Link className="dropdown-item text-light" to="/NutritionTracker">Nutrition tracker</Link></li>
                  <li><Link className="dropdown-item text-light" to="/WorkoutTracker">Workout tracker</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/SupplementPage">Suppliments</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/MotivationQuotes">Motivation Quotes</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/enquiry">Enquiry</Link>
              </li>
            </ul>

            <br />
            <ul>
              
            </ul>
            <button className="btn btn-outline-success bg-dark text-white" type="submit">
              <Link to="/">Logout</Link>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}














