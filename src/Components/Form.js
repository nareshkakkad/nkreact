import React from 'react';
import {useForm} from 'react-hook-form';

export default function Form() {

    const {handleSubmit} = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }

  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)} >
            <input type="text" placeholder="Email" name="user[email]"  />
            <input type="password" placeholder="Password" name="user[password]" />
            
            <input type="submit" value="Submit"/>
    </form>


    </div>
  )
}
