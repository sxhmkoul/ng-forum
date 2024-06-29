export default interface AuthModel {
  signUpPayload: {
    email: string;
    password: string;
    returnSecureToken: boolean;
  };
  signUpResponse: {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
  };
  loginPayload: {
    email: string;
    password: string;
    returnSecureToken: boolean;
  };
  loginResponse: {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
    registered?: boolean;
  };
}
