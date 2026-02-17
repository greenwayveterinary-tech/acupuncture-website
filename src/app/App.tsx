import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';
import { AcupuncturePage } from '@/app/pages/AcupuncturePage';
import { ForVetsPage } from '@/app/pages/ForVetsPage';
import { ContactPage } from '@/app/pages/ContactPage';
import { PrivacyPage } from '@/app/pages/PrivacyPage';
import { TermsPage } from '@/app/pages/TermsPage';
import { NotFoundPage } from '@/app/pages/NotFoundPage';

function Layout() {
  return (
    <>
      <ScrollRestoration />
      <div className="min-h-screen flex flex-col bg-primary">
        <Navigation />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/acupuncture', element: <AcupuncturePage /> },
      { path: '/for-vets', element: <ForVetsPage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/privacy', element: <PrivacyPage /> },
      { path: '/terms', element: <TermsPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
