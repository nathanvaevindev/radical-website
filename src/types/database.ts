// Supabase database type definitions.
// These mirror the schema defined in the data architecture spec.
// Regenerate via: npx supabase gen types typescript --project-id <project-id>

export type FormType = "contact" | "hire";
export type SubmissionStatus = "new" | "read" | "replied";

export type Database = {
  public: {
    Tables: {
      testimonials: {
        Row: {
          id: string;
          quote: string;
          name: string;
          role: string;
          location: string;
          photo_url: string | null;
          rating: number;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["testimonials"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<
          Database["public"]["Tables"]["testimonials"]["Insert"]
        >;
      };

      events: {
        Row: {
          id: string;
          title: string;
          date: string;
          time: string;
          type: string;
          location: string;
          description: string | null;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["events"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["events"]["Insert"]>;
      };

      team_members: {
        Row: {
          id: string;
          name: string;
          role: string;
          photo_url: string | null;
          bio: string | null;
          linkedin_url: string | null;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["team_members"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<
          Database["public"]["Tables"]["team_members"]["Insert"]
        >;
      };

      roles: {
        Row: {
          id: string;
          title: string;
          description: string;
          responsibilities: string[] | null;
          image_url: string | null;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["roles"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["roles"]["Insert"]>;
      };

      faq_items: {
        Row: {
          id: string;
          question: string;
          answer: string;
          page_context: string;
          sort_order: number;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["faq_items"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["faq_items"]["Insert"]>;
      };

      form_submissions: {
        Row: {
          id: string;
          form_type: FormType;
          name: string;
          email: string;
          company_name: string | null;
          message: string;
          status: SubmissionStatus;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["form_submissions"]["Row"],
          "id" | "created_at" | "status"
        >;
        Update: Partial<
          Database["public"]["Tables"]["form_submissions"]["Row"]
        >;
      };

      // Phase 2 — schema defined now, front-end component not yet built
      vacancies: {
        Row: {
          id: string;
          title: string;
          description: string;
          created_at: string;
        };
        Insert: Omit<
          Database["public"]["Tables"]["vacancies"]["Row"],
          "id" | "created_at"
        >;
        Update: Partial<Database["public"]["Tables"]["vacancies"]["Insert"]>;
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
