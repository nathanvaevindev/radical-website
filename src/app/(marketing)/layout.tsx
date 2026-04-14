import Header from "@/components/organisms/header";
import Footer from "@/components/organisms/footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {/* Offset for the fixed header height */}
      <div className="pt-18">{children}</div>
      <Footer />
    </>
  );
}
