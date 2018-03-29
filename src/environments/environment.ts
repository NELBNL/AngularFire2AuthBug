// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: "AIzaSyC-NFg2uGhvyE_h2DQR1xs2yUmhtMEFRIM",
    authDomain: "angularfire2authbug.firebaseapp.com",
    databaseURL: "https://angularfire2authbug.firebaseio.com",
    projectId: "angularfire2authbug",
    storageBucket: "angularfire2authbug.appspot.com",
    messagingSenderId: "899672778961"
  }
};
