import React from 'react'; 
import UsersList from '../components/UsersList';

const Users = () => {
   
   //Stubbed in data will letter pull from backend 
    const USERS =[
   {
        id: 'u1', 
        name: 'Terrence Wilburn',
        image: 'https://scontent-mad1-1.xx.fbcdn.net/v/t1.0-9/12742602_10153919558714291_3428830523232442987_n.jpg?_nc_cat=103&ccb=2&_nc_sid=a4a2d7&_nc_ohc=AoUNpUFWDo0AX-B-114&_nc_ht=scontent-mad1-1.xx&oh=afe73507a2f48f0694170ebcc1480a5e&oe=602CEF3D',
        places: 3
    }
   ];
    return <UsersList  items={USERS}/>
}; 

export default Users;