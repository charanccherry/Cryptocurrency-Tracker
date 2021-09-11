import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptoCurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {
    isLoading: true,
    cryptoData: [],
  }

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachData => ({
      id: eachData.id,
      currencyLogoUrl: eachData.currency_logo,
      currencyName: eachData.currency_name,
      usdValue: eachData.usd_value,
      euroValue: eachData.euro_value,
    }))
    this.setState({cryptoData: updatedData, isLoading: false})
  }

  renderCryptocurrenciesList = () => {
    const {cryptoData} = this.state

    return (
      <div className="crypto-details-list">
        {cryptoData.map(eachCrypto => (
          <CryptoCurrencyItem key={eachCrypto.id} cryptoData={eachCrypto} />
        ))}
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="crypto-cont">
        <div className="header">
          <h1 className="crypto-text">Coin Type</h1>
          <div className="coin-values">
            <p className="crypto-text">USD</p>
            <p className="crypto-text">EURO</p>
          </div>
        </div>
        <div>
          {isLoading ? (
            <div className="loader" testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            this.renderCryptocurrenciesList()
          )}
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
