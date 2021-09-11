import './index.css'

const CryptoCurrencyItem = props => {
  const {cryptoData} = props
  const {currencyLogoUrl, currencyName, usdValue, euroValue} = cryptoData

  return (
    <div className="cryptoItem">
      <div className="crypto-details">
        <img src={currencyLogoUrl} alt={currencyName} className="logo" />
        <p className="text">{currencyName}</p>
      </div>
      <div className="crypto-details">
        <p className="text">{usdValue}</p>
        <p className="text">{euroValue}</p>
      </div>
    </div>
  )
}
export default CryptoCurrencyItem
