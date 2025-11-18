import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Contexts
import { DeviceProvider } from "./09_context/deviceContext/DeviceContext.jsx";

// Hooks
import { useWakeUpServer } from "./10_hooks/useWakeUpServer.js";
import { useScrollToTop } from "./10_hooks/useScrollToTop.js";

// Styles
import "./08_styles/App.css";

// Routes
import { PublicRoutes, PublicLayout } from "./07_routes/routes.index.js";

/**
 * AppContent component - wraps routing logic
 * Must be inside Router to use useScrollToTop hook
 */
function AppContent() {
  // Scroll to top on route change (must be inside Router context)
  useScrollToTop();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/*" element={<PublicLayout />}>
          <Route path="*" element={<PublicRoutes />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

function App() {
  // Wake up server on app initialization (runs once per session)
  useWakeUpServer();

  return (
    <DeviceProvider>
      <Router>
        <AppContent />
      </Router>
    </DeviceProvider>
  );
}

export default App;
