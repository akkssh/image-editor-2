import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
const SUPABASE_URL = "https://yxjlaypqpeianxlzgvaq.supabase.co";
const SUPABASE_KEY = process.env.REACT_APP_SERVICE_KEY;

class _SuperbaseService {
  constructor() {
    this.supabase = null;
    console.log({ env: process.env });
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

  getImages = () => {
    return this.supabase.from("images").select();
  };

  uploadImage = (file) => {
    this.supabase.storage
      .from("images")
      .upload(file.name, file)
      .then(
        (res) => {
          console.log({ res });
        },
        (err) => {
          console.log(err);
        }
      );
  };
}

const SupabaseService = new _SuperbaseService();
export default SupabaseService;
