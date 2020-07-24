import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { Link } from 'react-router-dom';
import { useFirebase } from '../firebase';

export const HomeDefault = () => {
    const {firestore} = useFirebase();
    console.log(firestore);

    function getRandom(){
        let str = Math.random().toString(36);
        var random_string = str.substring(str.length - 7);
        return random_string
    }

    console.log(getRandom());

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster normal flex justify-center c-primary fs-56 lh-70 mb-4 mt-4'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="h-5 w-8 c-primary ph-4" placeholder='https://www.web-huudas.mn' />
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>
                        <Link className='remove c-default' to='/shortened'>Богиносгох</Link>
                    </Button>
                </div>
            </div>
        </Layout>
    )
}