# SMARTA
Deployed link - https://smarta-app.herokuapp.com/

## Challenge Choice: 
I considered the 3rd challenge option, but I was getting a lot of errors when looking at the API examples, so I decided to go with the first option for public transit. Because I live in Atlanta I decided to use the free MARTA API's, instead of the Phoenix one, as maybe I could continue building this out after the ~3 days I spent building it. 


I considered setting up a full-stack application, caching and formatting the data there and then serving it up to my React front-end. But, for the purposes of time, I decided to just setup a front-end. 



Environement variables:
- To get this working locally, you'll need to create a `.env` file at the root of the repo and include the following:
```
REACT_APP_GOOGLE_MAPS_KEY={GOOGLE MAPS API KEY}
REACT_APP_MARTA_KEY={MARTA API KEY}
// I had to use a proxy b/c of the CORS errors the MARTA API endpoints were giving me
REACT_APP_BUS_URL_BASE=https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService
REACT_APP_TRAIN_URL=https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain
```

Technologies used:
- React
- Redux
  - [Redux Toolkit](https://redux-toolkit.js.org/)
  - [Redux-Persist](https://github.com/rt2zz/redux-persist)
  - 
- [Chakra UI](https://chakra-ui.com/) 
  - I used the Chakra-UI create-react-app template
- [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
  - After fiddling around with it and then starting to write my own custom hook, for time's sake decided to use an existing one I found on npm - [use-position](https://www.npmjs.com/package/use-position)
- With the coordinates provided by the `use-position` library, the client is geolocated and those coordinates are pluged into the Google Maps API

### Todo's
- add backend and auth. This will allow user to customize their profile, save favorites, home/work datapoints, etc

### Roadbumps
- I picked ChakraUI to save time on writing custom CSS, but it presented other hurdles around testing as it including certain basic components are based on Portals/Modals and the use of a Context Provider. All of these can complicate UI testing. 
- Also, ChakraUI suggested Table solution was [react-table](https://github.com/tannerlinsley/react-table), which is highly regarded, but it is one of many open-source projects by 
