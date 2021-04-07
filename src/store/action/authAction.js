export const signIn = (params) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(params.email, params.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const signOut = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "SIGNOUT_SUCCESS" });
      });
  };
};

export const signUp = (newUser) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase
      .auth()
      .createUserWithEmailAndPassword(newUser.email, newUser.password)
      .then((res) => {
        return firestore.collection("users").doc(res.user.uid).set({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
        });
      })
      .then(() => {
        dispatch({ type: "SIGNUP_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "SIGNUP_ERROR", err });
      });
  };
};

export const changePassword = (currentUser) => {
  console.log(currentUser.newPassword);
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const user = firebase.auth().currentUser;

    user
      .updatePassword(currentUser.newPassword)
      .then(() => {
        dispatch({ type: "PASSWORD_CHANGE_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "PASSWORD_CHANGE_ERROR", err });
      });
  };
};
