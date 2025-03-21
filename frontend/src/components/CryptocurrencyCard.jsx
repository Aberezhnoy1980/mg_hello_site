import { Card } from "antd";
import numberWithCommas from "../utils.js"


function CryptocurrencyCard(props) {
    const { currency } = props

    const priceChangeColor = currency.quote.USD.percent_change_24h > 0 ? 'text-green-400' : 'text-red-400'
    const priceChange = Math.round(100 * currency.quote.USD.percent_change_24h) / 100
    const formattedPrice = numberWithCommas(Math.round(currency.quote.USD.price))
    const formattedMarketCap = numberWithCommas(Math.round(currency.quote.USD.market_cap / 1_000_000_000))


    return (
        <div>
            <Card
                title={
                    <div className="flex items-center gap-3">
                        <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} />
                        <span>{currency.name}</span>
                    </div>
                }
                variant="borderless"
                style={{
                    width: 300,
                    heigth: 340,
                }}
                className="text-2xl"
            >
                <p>Текущая цена: {formattedPrice}$</p>
                <span>Изменение цены за 24 часа: </span>
                <span className={priceChangeColor}>{priceChange}%</span>
                <p>Текущая капитализация: ${formattedMarketCap}B</p>
            </Card>
        </div>
    )
}

export default CryptocurrencyCard