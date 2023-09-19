
import {createContext, useState} from 'react';

const MyContext = createContext({
    user : {}
});


export const MyContextProvider = ({children}) => {

    const [coin, setCoin] = useState({});
    const [cryptoList, setCryptoList] = useState([]);
    const [searchedCoin, setSearchedCoin] = useState("");

  return (
    <MyContext.Provider value={{coin, setCoin, cryptoList, setCryptoList, searchedCoin, setSearchedCoin}}>
        {children}
    </MyContext.Provider>
  )
}

export default MyContext;

