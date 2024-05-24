import { BrowserRouter, Routes, Route } from "react-router-dom";

// COMPONENTS
import { AuthProvider } from "@/context/Auth/AuthProvider";
import { Sidebar } from "@/components";

import { Login } from "@/screens/Login";
import { Users } from "@/screens/Users";
import { RequireAuth } from "./context/Auth/RequireAuth";

function AppRoutes() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />

          <Route
            path="/"
            element={
              <RequireAuth>
                <Sidebar />
              </RequireAuth>
            }
          >
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default AppRoutes;
