import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Contexts
import { DeviceProvider } from "./09_context/deviceContext/DeviceContext.jsx";

// Styles
import "./08_styles/App.css";

import { PublicRoutes, PublicLayout } from "./07_routes/routes.index.js";

function App() {
  return (
    <DeviceProvider>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            {/* // ! Public Routes */}
            <Route path="/*" element={<PublicLayout />}>
              <Route path="*" element={<PublicRoutes />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>
    </DeviceProvider>
  );
}

export default App;

/*
    <>
      <div>
        <h1>Hello World</h1>
      </div>
      <Logo version="Header" />
    </>

*/
