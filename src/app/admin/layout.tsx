// Admin layout — protected. Authentication gate will be added here.
// Access: Radical team only via Supabase Auth.
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
