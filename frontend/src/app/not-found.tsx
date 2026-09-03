import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  return (
    <main id="main-content" className="not-found container">
      <span className="small-label">404 / PAGE NOT FOUND</span>
      <h1>
        Let’s get you
        <br />
        back on track.
      </h1>
      <p>The page you’re looking for doesn’t exist or has moved.</p>
      <Button asChild>
        <Link href="/">
          <ArrowLeft size={16} />
          Back to Rivixa
        </Link>
      </Button>
    </main>
  );
}
