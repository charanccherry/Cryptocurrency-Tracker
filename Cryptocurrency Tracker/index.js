import {Component} from 'react'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="crypto-tracker-app">
        <h1 className="crypto-head">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="Cryptocurrency Tracker"
          className="crypto-image"
        />
        <CryptocurrenciesList />
      </div>
    )
  }
}
export default CryptocurrencyTracker
