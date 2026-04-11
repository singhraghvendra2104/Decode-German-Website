import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env vars. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local",
  );
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Review = {
  id: string;
  created_at: string;
  name: string;
  reviewer: string | null;
  message: string;
  title: string | null;
  rating: number;
  product_id: string | null;
  published: boolean;
  review_image_url: string | null;
  verified: boolean;
};
