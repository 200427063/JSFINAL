import React, { useContext, useState, useEffect } from 'react';
import { NotificationContext } from '../shared/Notifications';
import { GlobalStoreContext } from '../shared/Globals';
import Axios from 'axios';
import Header from '../shared/Header';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const Games = () => {
  const { setNotification } = useContext(NotificationContext);
  const { globalStore } = useContext(GlobalStoreContext);

  const [games, setGames] = useState([]);

  useEffect(() => {
    if (!globalStore.REACT_APP_ENDPOINT) return;
    
    Axios.get(`${globalStore.REACT_APP_ENDPOINT}/games`)
    .then(({ data }) => {
      setGames(data);
    })
    .catch(error => {
      setNotification({
        type: "danger",
        message: `There was an error retrieving the games: ${error.message}`
      });
    });
  }, [globalStore, setNotification]);

  return (
    <>
      <Header title="Games"/>

      <Container>
        {games && games.length > 0 ? (
          <Table striped bordered hover>
            <thead>
              <th>Title</th>
              <th>Publisher</th>
              <th>Rating</th>
              <th>Actions</th>
            </thead>

            <tbody>
              {games.map((game, i) => (
                <tr key={i}>
                  <td>
                    {game.title}
                  </td>
                  
                  <td>
                    {game.publisher}
                  </td>

                  <td>
                    {game.rating}
                  </td>

                  <td>
                    <Link to={`/edit/${game._id}`}>
                      edit
                    </Link>
                    &nbsp;|&nbsp;
                    <Link to={`/destroy/${game._id}`}>
                      delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : null}
      </Container>
    </>
  );
}
 
export default Games;