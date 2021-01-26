# SMARTA
### Deployed link:
https://smarta-app.herokuapp.com/

### Use
Since this geolocates the user (via [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)), the user must allow their location to be accessed by their browser. They may also have to enable this setting on their computer (or phone) allowing the browser in use to access on each session). It works best if the user is metro Atlanta, the map will show nearby MARTA buses. I was testing on my wife's computer, and despite hitting "Allow" her chrome had not been granted access in Location Services on her Macbook. 

If the user is NOT in Atlanta, it may be better to not allow the browser to access their location, as it will default to the Atlanta Cox Headquarters' latitude/longitude coordinates. 

In the future, I plan to add some sort of input where the user can enter a specific location to show as the center of the map. 


### Challenge Choice
I considered the 3rd challenge option, but I was getting a lot of errors when looking at the API examples, so I decided to go with the first option for public transit. Because I live in Atlanta I decided to use the free MARTA API's, instead of the Phoenix one, as maybe I could continue building this out after the ~3 days I spent building it. 

I considered setting up a full-stack application, caching and formatting the data there and then serving it up to my React front-end. But, for the purposes of time, I decided to just setup a front-end and deploy it via Heroku. 

BUT, this is the real reason I chose this challenge - https://www.youtube.com/watch?v=ylXVITUc2AY

### Architectural Decisions
As I've primarily worked on frontend React applications, i knew I'd do the majority of the heavy lifting in React. 

The public transit APIs were not the most intuitive and the bus and train data were suprisingly dissimilar, so I decided to start with one of them, and hope that I could re-use some of the components for the other. A datatable would work for any dataset, but the location for each meant the map would not be as re-usable off the bat.

I chose to start with the Bus data, as it had longtitude and latitude coordinates, so it would be easy to plot on the map in relation to the user AND that same data could be used to display in a grid or chart. Unsure of how nested the components would get, it seemed like an easy decision to use Redux for a single store of state. This store would allow me to pass the bus and train data to wherever it is needed in either a map or chart. Lots of people in the React community are "down" on Redux, but with tools like redux-toolkit, configuration is much easier. Testing can be a pain, unless you are familiar. Alternatives like the Context API have much less condfig but testing can still be complicated.

Given more time, I would either implement a backend that continually caches the data and serves it to the front-end, OR even use something like Redux Toolkit's new front-end caching tool - https://rtk-query-docs.netlify.app/. This is very new but works similarly to the popular library [react-query](https://react-query.tanstack.com/).

Some other things for future would be to spend more time looking at transit apps for different cities to see how they have theirs setup. It would be great to have a page specific Bus/Train routes, and even find a way to plot entire routes on the map. 

Plotting the train data points will require some additional Map API investigation since there are no lat/lng coordinates. 

### UI Decisions
I wanted to make the app simple, clean, and responsive. The UI library helped make it look clean, and the Maps and DataTable packages allowed to build something that had a lot of content on just a few pages. 

The geolocation/maps were new territory for me, so I first started fiddling with these, and once I got them working I decided to use this map as the homepage, with the hopes of getting some of the public transit datapoints to also be plotted on the map. 

The datables were pretty easy to implement initially, but with all of the datapoints (and the bus ones unclearly labeled) it took more time than expected to make the columns responsive. The biggest issue with this package was that it required Material UI to be in the depedency tree. So, I actually have two UI library's in the dependencies 🤦. If I had enough time, I would switch over to use (react-table)[https://react-table.tanstack.com/], a popular Table library built by the same open-source maintainer that created react-query, mentioned above. React-table works well with Chakra UI and is very powerful, however, the features and UI out-of-the-box are minimal. 



### Detailed list of technologies used:
- [GeoLocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation)
  - After fiddling around with it and then starting to write my own custom hook, for time's sake decided to use an existing one I found on npm - [use-position](https://www.npmjs.com/package/use-position)
  - With the coordinates provided by the `use-position` library, the client is geolocated and those coordinates are pluged into the Google Maps API
- [Google Maps API Wrapper](https://react-google-maps-api-docs.netlify.app/)
  - javascript package specifically built for React
- React
  - I used [create-react-app](https://github.com/facebook/create-react-app) starter maintained by Facebook. It is easy to configure and has [webpack](https://webpack.js.org/) under the hood
- [Emotion](https://emotion.sh/docs/@emotion/react) for Styling 
  - CSS in JS library similar to styled-components
- [Chakra UI](https://chakra-ui.com/) 
  - React components
  - works well with emotion
- Redux for State Management
  - [Redux Toolkit](https://redux-toolkit.js.org/) - The official, opinionated, batteries-included toolset for efficient Redux development
  - [Redux-Persist](https://github.com/rt2zz/redux-persist)
    - Persist and rehydrate a redux store
  - [redux-thunk](https://github.com/reduxjs/redux-thunk) redux middleware
- [Material UI DataTables Wrapper](https://github.com/gregnb/mui-datatables)
  - Came with some built in functionality for filtering, sorting, and some styling
- [React-testing-library](https://testing-library.com/docs/react-testing-library/intro/) for testing UI
- [Jest](https://jestjs.io/) as a test runner
- [axios](https://github.com/axios/axios) for data fetching

### Roadbumps
- I picked ChakraUI to save time on writing custom CSS, but it presented other hurdles around testing as it including certain basic components are based on Portals/Modals and the use of a Context Provider
- I was getting CORS errors locally while using the MARTA APIs, but this should not have been an issue when I deployed the app, but it was. I noticed on the last day since I mistakenly waited to deploy, so I didn't have a ton of time. I continued using a heroku URL as a proxy, which allowed for me to deploy. However the heroku URL will eventually run into a rate-limiting issue.

### Running locally: 
Environement variables:
- To get this working locally, you'll need to create a `.env` file at the root of the repo and include the following:
```
REACT_APP_GOOGLE_MAPS_KEY={GOOGLE MAPS API KEY HERE}
REACT_APP_MARTA_KEY={MARTA API KEY}

// I had to use a proxy because of the CORS errors the MARTA API endpoints were giving even when deployed
REACT_APP_BUS_URL_BASE=https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService
REACT_APP_TRAIN_URL=https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain
```

Install dependencies
```
yarn install
```

Start application locally
```
yarn start
```

Run tests
```
yarn test
```