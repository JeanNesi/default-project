// LIBS
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TYPES
import { IRequireAuth } from "./types";

export const RequireAuth = ({ children }: IRequireAuth) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("authToken")) navigate("/login");
  }, []);

  return children;
};
