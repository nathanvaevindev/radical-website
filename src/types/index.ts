// ─── Navigation ────────────────────────────────────────────
export type NavLink = {
  label: string;
  href: string;
};

// ─── Forms ─────────────────────────────────────────────────
export type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  message: string;
  type: "company" | "professional";
};

export type HireFormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

// ─── Content ───────────────────────────────────────────────
export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  photoUrl: string | null;
  rating: number;
};

export type CommunityEvent = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  location: string;
  description: string | null;
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  photoUrl: string | null;
  bio: string | null;
  linkedinUrl: string | null;
  sortOrder: number;
};

export type Role = {
  id: string;
  title: string;
  description: string;
  responsibilities: string[] | null;
  imageUrl: string | null;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
  pageContext: string;
  sortOrder: number;
};
