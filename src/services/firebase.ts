import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    User,
} from 'firebase/auth';


const auth = getAuth();

export const signUp = async (email: string, password: string) => {
    const response = await createUserWithEmailAndPassword(auth, email, password);
    return response;
};

export const signIn = async (email: string, password: string) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response.user as User & { accessToken: string };
};





