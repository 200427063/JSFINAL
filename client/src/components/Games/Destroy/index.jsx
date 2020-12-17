import Axios from 'axios';
import React, { useEffect, useContext } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { GlobalStoreContext } from '../../shared/Globals';
import { NotificationContext } from '../../shared/Notifications';

const Destroy = () => {
  const { id } = useParams();
  const { globalStore } = useContext(GlobalStoreContext);
  const { setNotification } = useContext(NotificationContext);

  useEffect(() => {
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/games/${id}`)    
        .then(() => {
      setNotification(`Game was destroyed successfully.`);
    })
    .catch(error => {
      setNotification(`Couldn't destroy the selected game due to an error: ${error.message}`);
    });
  }, []);

  return <Redirect to="/games"/>;
}
 
export default Destroy;