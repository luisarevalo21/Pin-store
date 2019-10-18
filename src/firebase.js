import * as firebase from "firebase";

// <!-- The core Firebase JS SDK is always required and must be listed first -->
{
  /* <script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
    //  https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.2.1/firebase-analytics.js"></script>

<script> */
}
{
  /* // Your web app's Firebase configuration */
}
var firebaseConfig = {
  apiKey: "AIzaSyCr9VbKjbCIITEobvKJEKY9gSNsZiJ6xjs",
  authDomain: "twin-bear-creations.firebaseapp.com",
  databaseURL: "https://twin-bear-creations.firebaseio.com",
  projectId: "twin-bear-creations",
  storageBucket: "twin-bear-creations.appspot.com",
  messagingSenderId: "506361600740",
  appId: "1:506361600740:web:2080bfb0df2f9a4c752af1",
  measurementId: "G-M5LXXY0RRG"
};
{
  /* // Initialize Firebase */
}
firebase.initializeApp(firebaseConfig);
firebase.analytics();
// </script>
