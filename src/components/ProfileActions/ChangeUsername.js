import React, { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

function ChangeUsername() {
  const { currentUser } = useContext(AuthContext);
  const [newUsername, setNewUsername] = useState();

  const handleChange = (e) => {
    setNewUsername(e.target.value);
  };

  const setUsername = async (e) => {
    e.preventDefault();
    try {
      await currentUser.updateProfile({
        displayName: newUsername,
      });
    } catch (error) {
      alert('There has been an error: ', error);
    }
  };

  return (
    <div>
      <form onSubmit={setUsername}>
        <label>
          new desired username
          <input type="text" value={newUsername} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ChangeUsername;
