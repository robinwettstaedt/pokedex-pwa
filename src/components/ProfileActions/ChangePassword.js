import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function ChangeUsername() {
  const { currentUser } = useContext(AuthContext);
  const [newPassword, setNewPassword] = useState();

  const handleChange = (e) => {
    setNewPassword(e.target.value);
  };

  const changePassword = async (e) => {
    e.preventDefault();
    try {
      await currentUser.updatePassword(newPassword);
    } catch (error) {
      alert(
        'Please sign out and log in again. In order to delete your account you must have signed in recently. ',
        error
      );
    }
  };

  return (
    <div>
      <form onSubmit={changePassword}>
        <label>
          new desired password
          <input type="password" value={newPassword} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ChangeUsername;
