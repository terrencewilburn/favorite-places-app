import React, {useEffect, useState } from 'react'; 
import {useParams} from 'react-router-dom'; 

import Input from '../../shared/components/FormElements/Input'; 
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';
import { 
    VALIDATOR_REQUIRE, 
    VALIDATOR_MINLENGTH
}from '../../shared/util/validators'; 
import {useForm } from '../../shared/hooks/form-hooks'; 
import './PlaceForm.css';

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
      title: 'Flag Pole NYC', 
      description: 'This is a great place to visit',
      imageUrl: 'http://www.getsready.com/wp-content/uploads/2016/03/Statue-of-liberty.jpg', 
      address: 'Flagpole Plaza New York, NY 10004, USA',
      location: {
          lat: 40.690631,
          lng: -74.045657
      }, 
      creator: 'u2',
    }
  ];

  const UpdatePlace = () => {

      const[isLoading, setIsloading ]= useState(true); 
      const placeId = useParams().placeId; 

      const[formState, inputHandler, setFormData] = useForm(
          {
            title: {
                value: '', 
                isValid: false
            }, 
            description: { 
                value: '',
                isValid: false
            }

          }, 
          false
      ); 

      const identifiedPlace = DUMMY_PLACES.find( p => p.id === placeId); 

      useEffect(() => {
          if ( identifiedPlace){
              setFormData(
                  {
                      title: {
                          value: identifiedPlace.title, 
                          isValid: true 
                      }, 
                      description: {
                          value: identifiedPlace.description, 
                          isValid: true
                      }
                  }, 
                  true 
              ); 
          }
          setIsloading(false); 
      }, [setFormData, identifiedPlace]);
      
      const placeUpdateSubmitHandler = event =>{
          event.preventDefault(); 
          console.log(formState.inputs); 
      }

     if(!identifiedPlace){
          return(
              <div className="center">
                  <Card>  
                     <h2> Could not find place</h2>
                  </Card>
              </div>
          ); 
      }

     
      if(isLoading){
          return(
              <div className="center">
                  <h2>Loading .... </h2>
              </div>
          );
      }

    
    return(
        <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input 
            id='title'
            element="input" 
            type="text" 
            label="Title" 
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a valid title" 
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
            /> 
  
           <Input 
            id='description'
            element="textarea" 
            label="Description" 
            validators={[ VALIDATOR_MINLENGTH(5)]}
            errorText="Please enter a valid description (at leaset 5 characters)" 
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            /> 
  
            <Button type='submit' disabled={!formState.isValid}>
                Update Place
            </Button> 
        </form> 
    ); 
  }; 
  export default UpdatePlace; 
