import React from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';

export const Shortened = () => {
    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster normal flex justify-center c-primary fs-56 lh-70 mb-4 mt-1'>
                    Boginoo
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="h-5 w-8 c-primary ph-4" placeholder='https://www.web-huudas.mn' />
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary'>Богиносгох</Button>
                </div>
                <div className='mt-7 flex justify-center items-center flex-col'>
                    <div className='flex flex-start flex-col width-416'>
                        <a>Өгөгдсөн холбоос:</a>
                        <a className='font-ubuntu normal'>https://www.web-huudas.mn</a>
                    </div>
                </div>
                <div className='mt-6 flex justify-center items-center flex-col'>
                    <div className='flex flex-start flex-col width-416'>
                        <a>Богино холбоос:</a>
                        <a className='font-ubuntu normal'>shorty.io/wbmn12</a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}