**Weather Forecasting App**
The Weather Forecasting App is a web application that provides users with temperature and weather summary forecasts for upcoming hours and days based on latitude and longitude coordinates. The app leverages the Met Norway Weather API to fetch weather data for a specific location.

**Functionality**
Input Form: The app features an input form where users can enter latitude and longitude coordinates to specify the location for which they want to fetch weather forecasts.

**Get Forecast Button:** After entering the coordinates, users can click on the "Get Forecast" button to retrieve weather data for the specified location.

**Weather Data Display:** The app displays the fetched weather data in a tabular format, showing the temperature, time, and weather summary for upcoming hours and days.

**Technologies Used**
**Next.js**: Next.js is used as the framework for building the web application. It provides server-side rendering, routing, and other features to enhance the development experience.

**React**: React is used for building the user interface components of the Weather Forecasting App. It allows for the creation of interactive and dynamic UI elements.

**CSS:** CSS is used for styling the components and layout of the app, ensuring a visually appealing and user-friendly interface.

**API Endpoint**
The Weather Forecasting App retrieves weather data from the Met Norway Weather API. The API endpoint used for fetching weather forecasts is:
**https://api.met.no/weatherapi/locationforecast/2.0/compact?lat={latitude}&lon={longitude}**


Users can replace {latitude} and {longitude} with the desired latitude and longitude coordinates to fetch weather data for their specified location.

**_app.js:**

This file serves as the entry point for the Next.js application.
It imports the global CSS file globals.css.
The App component receives Component and pageProps as props and renders the Component with the given pageProps.

**_document.js:**

This file defines the basic structure of the HTML document used by Next.js.
It imports components from next/document for Html, Head, Main, and NextScript.
The Document component returns an HTML document with the specified language, including the Main content of the app and the NextScript for loading scripts.

**layout.js:**

This file defines the root layout for the application.
It imports the global CSS file globals.css and the Inter font from next/font/google.
The metadata object contains title and description metadata for the app.
The RootLayout component wraps the children with HTML structure and applies the inter font class to the body.

**page.js:**

This file contains the main functionality of the Weather Forecasting App.
It defines the Home component, which serves as the main page of the app.
The useState hook is used to manage state variables for latitude, longitude, and weather forecast data.
The API_BASE_URL constant holds the base URL for fetching weather data from the Met Norway Weather API.
The getWeatherData function is an asynchronous function that fetches weather data from the API based on the provided latitude and longitude.
The form allows users to input latitude and longitude coordinates and submit to fetch weather data.
The fetched weather data is displayed in a table format, showing the time, temperature, and weather summary for each forecasted hour.

**Usage**
****To use the Weather Forecasting App, follow these steps**:

Input latitude and longitude coordinates into the form fields.
Click on the "Get Forecast" button to retrieve weather data.
View the weather forecasts displayed in the table format.
**Contributing**
Contributions to the Weather Forecasting App project are welcome! If you'd like to contribute, fork the repository, make your changes, and submit a pull request.

**License**
This project is licensed under the MIT License. See the LICENSE file for details.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
