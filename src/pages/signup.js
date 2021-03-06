import React, { useState, useEffect } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useFirebase } from '../firebase'

export const Signup = () => {
    let { auth } = useFirebase();

    let [mail, setMail] = useState('');
    let [pass, setPass] = useState('');
    const getMail = (str) => {
        setMail(str.target.value);
    }
    const getPass = (str) => {
        setPass(str.target.value);
    }


    
    const Short = () => {
                auth.createUserWithEmailAndPassword(mail, pass).catch(function(error) {
                    var errorMessage = error.message;
                    alert(errorMessage);
                }).then(() => {
                    alert('registered');
                    window.location.href = '/';
                })
    }

    return (
        <Layout>
            <div className='h100 flex flex-col'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='font-lobster normal flex justify-center c-primary fs-56 lh-70 mb-4'>
                    Boginoo
                </div>
                <div className='font-ubuntu normal c-primary bold flex justify-center fs-32 lh-37'>
                    Бүртгүүлэх
                </div>
                <div className='mt-5 flex justify-center items-center flex-col'>
                    <div className='w-8 flex flex-start'>Цахим хаяг</div>
                    <Input onChange={getMail} className="h-5 w-8 c-primary ph-4" placeholder='name@mail.domain' />
                </div>
                <div className='mt-5 flex justify-center items-center flex-col'>
                    <div className='w-8 flex flex-start'>Нууц үг</div>
                    <Input onChange={getPass} className="h-5 w-8 c-primary ph-4" placeholder='password' type='password'/>
                </div>
                <div className='mt-5 flex justify-center items-center flex-col'>
                    <div className='w-8 flex flex-start'>Нууц үг давтна уу?</div>
                    <Input className="h-5 w-8 c-primary ph-4" placeholder='repeat password' type='password'/>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-6 b-primary ' onClick ={Short} >Бүртгүүлэх</Button>
                </div>
            </div>
        </Layout>
    )
}