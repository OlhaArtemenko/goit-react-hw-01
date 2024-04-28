// import { useState } from 'react';
import Profile from '../Profile/Profile.jsx';
import FriendList from '../FriendList/FriendList.jsx';
import userData from '../../userData.json';
import friends from '../../friends.json';

export default function App() {
  return (
    <>
      <Profile user={userData} />
      <FriendList friends={friends} />
    </>
  );
}
