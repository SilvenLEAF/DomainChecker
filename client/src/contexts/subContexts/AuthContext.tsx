import React, { createContext } from 'react'
import UserDataInterface from '../../interfaces/UserDataInterface';






interface authContextInterface {
    userData: UserDataInterface | undefined,
    setUserData: Function
}




export const AuthContext = createContext( {} as authContextInterface );







