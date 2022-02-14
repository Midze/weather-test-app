# Weather React App

This small fast made weather app for test case.

 [Weather API](https://openweathermap.org/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Improvements

- user city search
- automaticaly get position
  example: 
  
 <html>
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    }
  
    function getPosition(position) {
      console.log(position.coords.latitude, position.coords.longitude);
    }
 </html>
 - create tests RTL & Jest
