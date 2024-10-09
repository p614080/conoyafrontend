import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";
import { AuthProvider, useAuth } from "./context/AuthContext";

const AppContent = () => {
  const { state } = useAuth();

  useEffect(() => {
    console.log("Current user state:", state.user);
  }, [state.user]);

  return <RouterProvider router={root} />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
