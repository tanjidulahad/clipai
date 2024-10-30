'use client'
import Header from '@/components/shared/Header';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create CreditContext
const CreditContext = createContext();

export const useCredit = () => useContext(CreditContext);

const Provider = ({ children }) => {
    const pathName = usePathname()
    const isShowHeader = ['/sign-in', '/sign-up'].includes(pathName)
    const {user}=useUser()
    const [credit,setCredit]=useState()

    useEffect(()=>{
        user&&saveUserToDB()
    },[user])

    const saveUserToDB=async ()=>{
        try {
            await axios.post("/api/post-user",{
                email:user?.primaryEmailAddress?.emailAddress
            })

            await fetchUserCredit()
            
        } catch (error) {
            console.log(error)
        }
    }

    const fetchUserCredit=async()=>{
        axios.get(`/api/get-credit?email=${user?.primaryEmailAddress?.emailAddress}`)
        .then(res=>{
            const resCredit=res?.data?.user[0]?.credit
            setCredit(resCredit)
        })
        .catch(e=>console.log(e))
    }


    return (
        <CreditContext.Provider value={{ credit, setCredit }}>
        <div>
            {!isShowHeader && <div>
                <Header credit={credit}/>
            </div>}

            <div>
                {children}
            </div>
            
        </div>
        </CreditContext.Provider>
    );
};

export default Provider;