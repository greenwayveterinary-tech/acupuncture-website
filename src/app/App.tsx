import { Suspense, lazy, type ReactNode } from 'react';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { HomePage } from '@/app/pages/HomePage';

const AcupuncturePage = lazy(async () => {
  const module = await import('@/app/pages/AcupuncturePage');
  return { default: module.AcupuncturePage };
});

const ForVetsPage = lazy(async () => {
  const module = await import('@/app/pages/ForVetsPage');
  return { default: module.ForVetsPage };
});

const ContactPage = lazy(async () => {
  const module = await import('@/app/pages/ContactPage');
  return { default: module.ContactPage };
});

const PrivacyPage = lazy(async () => {
  const module = await import('@/app/pages/PrivacyPage');
  return { default: module.PrivacyPage };
});

const TermsPage = lazy(async () => {
  const module = await import('@/app/pages/TermsPage');
  return { default: module.TermsPage };
});

const NotFoundPage = lazy(async () => {
  const module = await import('@/app/pages/NotFoundPage');
  return { default: module.NotFoundPage };
});

const BlogListPage = lazy(async () => {
  const module = await import('@/app/pages/BlogListPage');
  return { default: module.BlogListPage };
});

const BlogPostPage = lazy(async () => {
  const module = await import('@/app/pages/BlogPostPage');
  return { default: module.BlogPostPage };
});

function PageLoader({ children }: { children: ReactNode }) {
  return (
    <Suspense fallback={<div className="min-h-[40vh] bg-card" />}>
      {children}
    </Suspense>
  );
}

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
      { path: '/acupuncture', element: <PageLoader><AcupuncturePage /></PageLoader> },
      { path: '/for-vets', element: <PageLoader><ForVetsPage /></PageLoader> },
      { path: '/blog', element: <PageLoader><BlogListPage /></PageLoader> },
      { path: '/blog/:slug', element: <PageLoader><BlogPostPage /></PageLoader> },
      { path: '/contact', element: <PageLoader><ContactPage /></PageLoader> },
      { path: '/privacy', element: <PageLoader><PrivacyPage /></PageLoader> },
      { path: '/terms', element: <PageLoader><TermsPage /></PageLoader> },
      { path: '*', element: <PageLoader><NotFoundPage /></PageLoader> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
