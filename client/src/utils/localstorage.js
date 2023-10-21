export const getuserIds = () => {
    const savedIds = localStorage.getItem('saved_user')
      ? JSON.parse(localStorage.getItem('saved_user'))
      : [];
  
    return savedUserIds;
  };
  
  export const saveUserIds = (userIdArr) => {
    if (userIdArr.length) {
      localStorage.setItem('saved_user', JSON.stringify(userIdArr));
    } else {
      localStorage.removeItem('saved_user');
    }
  };
  
  export const removeUserId = (userId) => {
    const savedUserIds = localStorage.getItem('saved_user')
      ? JSON.parse(localStorage.getItem('saved_user'))
      : null;
  
    if (!savedUserIds) {
      return false;
    }
  
    const updatedSavedUserIds = savedUserIds?.filter((savedUserId) => saveduserId !== userId);
    localStorage.setItem('saved_User', JSON.stringify(updatedSaveduserIds));
  
    return true;
  };
  