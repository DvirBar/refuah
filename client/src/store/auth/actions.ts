import { request } from "init";
import { useSetRecoilState } from "recoil";
import { authAtom } from "./atoms";
import {
  AuthActionsHookReturn, LoginData, RegisterData, User,
} from "./types";

function useAuthActions(): AuthActionsHookReturn {
  const setAuth = useSetRecoilState(authAtom);
  const baseUrl = "auth";

  async function authError(err: unknown) {
    setAuth({
      isAuthenticated: false,
      user: null,
    });
    console.log(err);
  }

  async function login(loginData: LoginData) {
    try {
      const user = await request.post<User>(`${baseUrl}/login`, loginData);
      setAuth(authState => ({
        ...authState,
        isAuthenticated: true,
        user,
      }));
    } catch (err) {
      authError(err);
    }
  }

  async function register(registerData: RegisterData) {
    try {
      const user = await request.post<User>(`${baseUrl}/register`, registerData);
      setAuth(authState => ({
        ...authState,
        isAuthenticated: true,
        user,
      }));
    } catch (err) {
      authError(err);
    }
  }

  async function forgotPassword(email: string) {
    try {
      await request.post<string>(`${baseUrl}/forgotPassword`, { email });
    } catch (err) {
      authError(err);
    }
  }

  async function resetPassword(password: string, token: string) {
    try {
      await request.post<string>(`${baseUrl}/resetPassword/${token}`, { password });
    } catch (err) {
      authError(err);
    }
  }

  return {
    login,
    register,
    forgotPassword,
    resetPassword,
  };
}

export default useAuthActions;
