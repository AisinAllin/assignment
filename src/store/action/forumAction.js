export const createForum = (forum) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    console.log(profile);
    console.log(authorId);

    firestore
      .collection("forum")
      .add({
        ...forum,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_FORUM_SUCCESS", forum });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_FORUM_ERROR" }, err);
      });
  };
};
