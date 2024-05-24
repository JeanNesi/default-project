import { ErrorBoundary } from "react-error-boundary";
import { ThemeProvider } from "styled-components";
import { ToastContainer, Slide } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IconContext } from "@phosphor-icons/react";
import { ErrorFallback } from "./components";
import AppRoutes from "./routes";
import { theme } from "./styles/theme";
import GlobalCSS from "./styles/globalCSS";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

export default function App() {
  const query = new QueryClient();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={query}>
          <IconContext.Provider
            value={{ color: theme.color.primary, size: 16, weight: "bold" }}
          >
            <GlobalCSS />
            <ToastContainer
              position="bottom-left"
              autoClose={2500}
              hideProgressBar={false}
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              transition={Slide}
            />
            <AppRoutes />
          </IconContext.Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
