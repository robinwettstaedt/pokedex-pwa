import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function DeleteAccount() {
  const { currentUser } = useContext(AuthContext);

  const deleteAccount = async () => {
    try {
      await currentUser.delete();
    } catch (error) {
      alert(
        'Please sign out and log in again. In order to delete your account you must have signed in recently. ',
        error
      );
    }
  };

  return (
    <div>
      <button onClick={deleteAccount}>Delete Account</button>
    </div>
  );
}

export default DeleteAccount;
