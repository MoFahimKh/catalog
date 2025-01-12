<h1 align="center">Welcome to Catalog ETH Price Tracker 👋</h1>

> A React TypeScript application to track the real-time price of Ethereum (ETH) in USD, connect to MetaMask wallet, display ETH balance in USD, and visualize ETH price trends with an interactive line graph.

## Features

- **Wallet Connection**: Connect your MetaMask wallet using `ethers.js`.
  ![Wallet Connect](/src/assets/connect-wallet.png)
- **Real-time Balance**: Displays your wallet's ETH balance in USD with live updates.
  ![Real-time Balance](/src/assets/bal.png)
- **Price Change Tracking**: Shows real-time changes in ETH balance in USD with percentage change in price.
  ![Price Change Tracking](/src/assets/price-change.png)
- **Line Graph**: Visualize ETH price trends in USD over selected time periods:
  - 1 Day, 3 Days, 1 Week, 1 Month, 6 Month and max.

![Line Graph](/src/assets/line-graph.png)

- **Modern UI**: Built with React and TypeScript for a smooth and responsive user experience.

## Installation

To set up the project locally:

```sh
npm install or npm install --legacy-peer-deps
```

## Usage

```sh
npm run dev
```

## Technologies Used

- **React**: For building the UI.
- **TypeScript**: Ensures type safety and scalability.
- **ethers.js**: To interact with the Ethereum blockchain and connect to MetaMask.
- **CoinGecko API**: Fetches real-time and historical ETH price data.
- **Chart.js**: For rendering the interactive line graph.

## Deployment link

Deployed using netlify.

- [Link](https://catalog-eth-price-feed.netlify.app/)

## Author

👤 **Mohammad Fahim Khan**

- Github: [@MoFahimKh](https://github.com/MoFahimKh)

## Note

Currently for testing purpose network selected is `SepoliaETH`, chainID : 11155111

**
This README.md provides a comprehensive overview of your project, its features, and usage. Let me know if you'd like further refinements!
**
