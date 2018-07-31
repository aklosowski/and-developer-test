# AndDeveloperTest

This project uses Angular 5

## Setup

To run the application you have to provide Foursquare API client ID and client secret. In /src/app create a foursquare.secret.ts file with the following contents:

```
export const secrets = {
    foursquare: {
        clientId: <YOUR CLIENT ID>,
        clientSecret: <YOUR CLIENT SECRET>
    }
};
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests.

## A little explanation

I have built the project using Angular because of its ease of use for creating a web application, fetching data from APIs plus it automatically adds the bonus abilities mentioned in the task.