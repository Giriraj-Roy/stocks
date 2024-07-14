# Welcome to myStocks


>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npx react-native start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npx run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.


## Diving Into the Application

###  Folder Structure  
```
my-stocks/
├── android/
├── ios/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   └── sampledata/
│   ├── components/
│   │   ├── Chart.js
│   │   ├── Loader.js
│   │   ├── TitleBar.js
│   │   ├── TopCards.js
│   │   ├── StockHeader.js
│   │   └── StockDesc.js
│   ├── constants/
│   │   ├── apiKey.js
│   │   └── baseUrl.js
│   ├── navigation/
│   │   ├── AppNavigator.js
│   │   ├── TabNavigator.js
│   │   └── ...
│   ├── screens/
│   │   ├── Detail.js
│   │   ├── Search.js
│   │   ├── TopGainers.js
│   │   ├── TopLosers.js
│   │   └── Error.js
│   ├── utils/
│   │   ├── APIs.js
│   │   ├── AppContext.js
│   │   └── AppProvider.js
│   └── App.js
├── .gitignore
├── babel.config.js
├── index.js
├── metro.config.js
├── package.json
└── README.md
```

#### API Endpoint

```
https://www.alphavantage.co/
```

#### Key Performance Indicators

- Lazy Loaded Images
- Proper Handling of Loading, Error and empty states
- Cached API Responses
- Light and Dark Mode feature
