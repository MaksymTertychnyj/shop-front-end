export interface LoginModalProps {
  visible: boolean;
  confirmFunc: () => void;
  setLogin: (login: string) => void;
  setPassword: (password: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
}
