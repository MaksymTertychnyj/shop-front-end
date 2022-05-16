export interface LoginModalProps {
  visible: boolean;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}
