/**
 * Operational Signal Desk: all routes share Glo's asymmetric editorial shell,
 * charcoal/cream contrast, signal rails, and one dominant Book a Demo path.
 */
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import ErrorBoundary from "@/components/ErrorBoundary";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Home from "@/pages/Home";
import DemoPage from "@/pages/DemoPage";
import ContactPage from "@/pages/ContactPage";
import ContentPage from "@/pages/ContentPage";
import LegalPage from "@/pages/LegalPage";
import StaffingWorldPage from "@/pages/StaffingWorldPage";
import { Route, Router as WouterRouter, Switch } from "wouter";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/book-a-demo/" component={DemoPage} />
      <Route path="/contact/" component={ContactPage} />
      <Route path="/staffing-world-glo-up/" component={StaffingWorldPage} />
      <Route path="/privacy/" component={LegalPage} />
      <Route path="/security/" component={LegalPage} />
      <Route path="/terms/" component={LegalPage} />
      <Route component={ContentPage} />
    </Switch>
  );
}

export default function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <WouterRouter ssrPath={ssrPath}>
            <Toaster />
            <Router />
          </WouterRouter>
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
