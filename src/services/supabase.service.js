import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const SUPABASE_URL = "https://yxjlaypqpeianxlzgvaq.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl4amxheXBxcGVpYW54bHpndmFxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUzNzg3MDYsImV4cCI6MTk2MDk1NDcwNn0._9RARzH2rOcRAZAvG8rezuPhFPmqLOPeqXsR-C17rBc";

class _SuperbaseService {
  constructor() {
    this.supabase = null;
  }

  initialize = async () => {
    this.supabase = await createClient(SUPABASE_URL, SUPABASE_KEY);
    return this.supabase;
  };

  signUp = (data) => {
    return this.supabase.auth.signUp(data);
  };

  signIn = (data) => {
    return this.supabase.auth.signIn(data);
  };

  logoutUser = () => {
    return this.supabase.auth.signOut();
  };

  getSession = () => {
    return this.supabase && this.supabase.auth.session();
  };
}

const SupabaseService = new _SuperbaseService();
export default SupabaseService;
