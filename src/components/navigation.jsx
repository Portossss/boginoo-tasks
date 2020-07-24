import React from 'react';
import { Button } from './';
import { Link } from 'react-router-dom';
import {Context} from './provider';
import { useContext } from 'react';
import { useEffect } from 'react';

export const Navigation = (props) => {
    let logged = false;
    const user = useContext(Context);
    /* 
        https://boginoo.firebaseapp.com/navigation

        <div className='...'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
        <Button> Нэвтрэх button-ийг эхний ээлжинд нэмэх
      
    */
   console.log('user ', user)
   useEffect(() => {
           if(user){
                return (
                    <div className='w100 flex justify-end items-center'>
                        <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
                        
                        <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>
                            <Link className='remove c-default' to='/login'>{user.email.split('@')[0]}</Link>
                        </Button>
                        <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>
                            <Link className='remove c-default' to='/'>HOME</Link>
                        </Button>
                    </div>
                );
           }
   }, [user])

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>
                <Link className='remove c-default' to='/login'>Нэвтрэх</Link>
            </Button>
            <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>
                <Link className='remove c-default' to='/'>HOME</Link>
            </Button>
        </div>
    );
};