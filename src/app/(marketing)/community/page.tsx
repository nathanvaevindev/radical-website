import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
  description:
    "The Radical community — a curated network of top AI professionals. Coming soon.",
};

export default function CommunityPage() {
  return (
    <main className="flex min-h-[80dvh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-heading text-5xl font-bold text-heading md:text-6xl lg:text-7xl">
          Coming soon.
        </p>
        <p className="mt-4 text-lg text-muted">
          We&apos;re building something worth waiting for.
        </p>
      </div>
    </main>
  );
}
