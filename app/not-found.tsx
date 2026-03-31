import Link from "next/link";
import { Container } from "@/components/shared/Container";

export default function NotFound() {
  return (
    <section className="section-shell bg-surface">
      <Container className="text-center">
        <h1 className="text-3xl font-semibold">Page Not Found</h1>
        <p className="mt-3 text-muted">The page you are looking for does not exist.</p>
        <Link href="/" className="cta-primary mt-6 inline-flex">
          Back to Home
        </Link>
      </Container>
    </section>
  );
}
