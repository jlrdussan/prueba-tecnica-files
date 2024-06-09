import { defineStore } from 'pinia';

interface User {
  uid: string;
  email: string | null;
  emailVerified:boolean
}

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      user: {} as User | null,
    };
  },
  actions: {
    setUser(user: User) {
      this.user = { ...user };
    },
    clearUser() {
      this.user = null;
    },
  },
});
