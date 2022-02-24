const INSTA_TOKEN = "supabase.auth.token";

class _AuthTokenService {
  constructor() {
    this._authToken = "";
  }

  handleLoginSuccess = (authToken) => {
    this.setAuthToken(authToken);
  };

  handleLogoutSuccess = () => {
    this.setAuthToken();
  };

  setAuthToken = (authToken) => {
    this._authToken = authToken;
  };

  getAuthToken = () => {
    let token = this._authToken;
    if (!token) {
      token = localStorage.getItem(INSTA_TOKEN) || "";
      token && this.setAuthToken(JSON.parse(token));
    }
    console.log("getAuthToken", { token });
    return token;
  };

  clearLocalStorage = () => {};
}
const AuthTokenService = new _AuthTokenService();

export default AuthTokenService;
