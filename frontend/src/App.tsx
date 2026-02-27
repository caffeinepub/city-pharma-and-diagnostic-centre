import {
  createRootRoute,
  createRoute,
  createRouter,
  RouterProvider,
  Outlet,
} from '@tanstack/react-router';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import Home from './pages/Home';
import Medicine from './pages/Medicine';
import Pathology from './pages/Pathology';
import Ultrasound from './pages/Ultrasound';
import Doctors from './pages/Doctors';

// Root layout route
const rootRoute = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1 page-transition">
        <Outlet />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  ),
});

// Child routes
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const medicineRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/medicine',
  component: Medicine,
});

const pathologyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pathology',
  component: Pathology,
});

const ultrasoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/ultrasound',
  component: Ultrasound,
});

const doctorsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/doctors',
  component: Doctors,
});

// Build route tree
const routeTree = rootRoute.addChildren([
  indexRoute,
  medicineRoute,
  pathologyRoute,
  ultrasoundRoute,
  doctorsRoute,
]);

// Create router
const router = createRouter({ routeTree });

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
