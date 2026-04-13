// Marketing layout — wraps all public pages with shared Header + Footer.
// Header and Footer components will be added here in the next phase.
export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
