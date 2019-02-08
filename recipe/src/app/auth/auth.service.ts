import * as firebase from 'firebase';

export class AuthService {
    signupUser(email: string, password: string){
        firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => {
            console.log(error);
        });
    }

    signinUser(email: string, password: string){
        firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        })
    }
}