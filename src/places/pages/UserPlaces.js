import React from 'react'; 
import {useParams} from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [ 
  {
    id: 'p1',
    title: 'Sagrada Famila', 
    description: 'One of Gaudi greatest creations',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Barcelona_Temple_Expiatori_de_la_Sagrada_Fam_lia_%282050445207%29.jpg/1200px-Barcelona_Temple_Expiatori_de_la_Sagrada_Fam_lia_%282050445207%29.jpg', 
    address: 'Carrer de Mallorca, 401, 08013 Barcelona',
    location: {
        lat: 41.4036299,
        lng: 2.172167117
    }, 
    creator: 'u1',
  },

  {
    id: 'p2',
    title: '', 
    description: '',
    imageUrl: 'http://www.getsready.com/wp-content/uploads/2016/03/Statue-of-liberty.jpg', 
    address: 'Flagpole Plaza New York, NY 10004, USA',
    location: {
        lat: 40.690631,
        lng: -74.045657
    }, 
    creator: 'u2',
  }
];

const UserPlaces = () => {
    const userId = useParams().userId; 
    const loadePlaces = DUMMY_PLACES.filter(places => places.creator === userId)
    return <PlaceList items={loadePlaces}/>; 
};

export default UserPlaces; 
