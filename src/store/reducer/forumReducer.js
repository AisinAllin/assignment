const initState = {
  forum: [],
};

const forumReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_FORUM_SUCCESS":
      console.log("CREATE_FORUM_SUCCESS", action.forum);
      return state;
    case "CREATE_FORUM_ERROR":
      console.log("CREATE_FORUM_ERROR", action.err);
      return state;
    default:
      return state;
  }
};

export default forumReducer;
