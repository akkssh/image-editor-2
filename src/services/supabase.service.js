import { createClient } from "@supabase/supabase-js";
import { isCompositeComponent } from "react-dom/test-utils";

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
    const session = this.supabase && this.supabase.auth.session();
    this.user = session.user;
    return session;
  };

  getImages = () => {
    return this.supabase.from("images").select().match({ user: this.user.id });
  };

  uploadImage = (file) => {
    console.log({ user: this.user });
    return this.supabase.storage
      .from("images")
      .upload(`${this.user.id}/${file.name}`, file)
      .then(
        (res) => {
          console.log("uploadImageSuccess");
          return this.createImageInTable(file.name);
        },
        (err) => {
          console.log(err);
        }
      );
  };

  createImageInTable = (fileName) => {
    const { publicURL } = this.supabase.storage
      .from("images")
      .getPublicUrl(`${this.user.id}/${fileName}`);
    return this.supabase
      .from("images")
      .insert([{ user: this.user.id, url: publicURL }]);
  };
}

// images/aba70d15-d332-4883-b63a-d4cbcf53fefc/20928276.jpg
// https://yxjlaypqpeianxlzgvaq.supabase.in/storage/v1/object/public/images/aba70d15-d332-4883-b63a-d4cbcf53fefc/ZSLN9W3L8.png
const SupabaseService = new _SuperbaseService();
export default SupabaseService;
