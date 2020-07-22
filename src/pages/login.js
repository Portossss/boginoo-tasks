import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const Login = () => {
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
                <div className='font-ubuntu normal c-primary bold flex justify-center fs-32 lh-37'>
                    Нэвтрэх
                </div>
                <div className='mt-5 flex justify-center items-center flex-col'>
                    <div className='w-8 flex flex-start'>Цахим хаяг</div>
                    <Input className="h-5 w-8 c-primary ph-4" placeholder='name@mail.domain' />
                </div>
                <div className='mt-5 flex justify-center items-center flex-col'>
                    <div className='w-8 flex flex-start'>Нууц үг</div>
                    <Input className="h-5 w-8 c-primary ph-4" placeholder='password' type='password'/>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <a className='c-primary'>Намайг санах</a>
                    <a className='ml-4' href='#'>Нууц үгээ мартсан?</a>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-6 b-primary '>Нэвтрэх</Button>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <a className='c-primary' href='#'>Шинэ хэрэглэгч бол энд дарна уу</a>
                </div>
            </div>
        </Layout>
    )
}