import React, { useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Spin } from 'antd';
import axios from "axios"
import CryptocurrencyCard from "./components/CryptocurrencyCard.jsx"
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const App = () => {
  const [currencies, setCurrencies] = useState([])
  const [currencyId, setCurrencyId] = useState(1)
  const [currencyData, setCurrencyData] = useState(null)

  const helloMsg = "Дорогие гости! Дружный коллектив проекта MarketGenius рад приветствовать вас на сайте нашего проекта! Пока мы готовим для вас крутейшее приложения для прогноза и аналитики фондового рынка, предлагаем вам не скучать и следить за криптовалютами!"

  const fetchCurrencies = () => {
    axios.get('api/cryptocurrencies').then(r => {
      const currenciesResponse = r.data
      const menuItems = [
        getItem('Список криптовалют', 'g1', null,
          currenciesResponse.map(c => {
            return { label: c.name, key: c.id }
          }),
          'group'
        )
      ]
      setCurrencies(menuItems)
    })
  }

  // const fetchCurrency = () => {
  //   axios.get(`http://127.0.0.1:8000/cryptocurrencies/${currencyId}`).then(r => {
  //     setCurrencyData(r.data)
  //   })
  // }

  useEffect(() => {
    fetchCurrencies()
  }, [])


  useEffect(() => {
    setCurrencyData(null),
      axios.get(`/api/cryptocurrencies/${currencyId}`).then(r => {
        setCurrencyData(r.data)
      })
  }, [currencyId])


  const onClick = (e) => {
    setCurrencyId(e.key);
  };
  return (
    <div className="flex">
      <Menu
        onClick={onClick}
        style={{
          width: 256,
        }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={currencies}
        className="h-screen overflow-scroll min-w-50"
      />
      <div className="flex flex-col items-center mx-auto my-auto gap-20">
        <div className="mx-20 text-2xl">
          <span>{helloMsg}</span>
        </div>
        {currencyData ? <CryptocurrencyCard currency={currencyData} /> : <Spin size="large" />}
      </div>
    </div>
  );
};
export default App;