import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-secondary px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-serif text-accent mb-4">404</h1>
        <h2 className="text-2xl font-serif text-foreground mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-colors font-medium"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
