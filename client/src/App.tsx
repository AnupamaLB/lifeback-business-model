import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import DoctorDashboard from "./pages/DoctorDashboard";
import Programs from "./pages/Programs";
import Stakeholders from "./pages/Stakeholders";
import Resources from "./pages/Resources";
import BusinessModel from "./pages/BusinessModel";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/doctor-dashboard"} component={DoctorDashboard} />
      <Route path={"/programs"} component={Programs} />
      <Route path={"/stakeholders"} component={Stakeholders} />
      <Route path={"/resources"} component={Resources} />
      <Route path={"/business-model"} component={BusinessModel} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Header />
          <Router />
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
