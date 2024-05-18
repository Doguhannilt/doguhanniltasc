import React, { useEffect } from 'react'

import signup from  '../Images/Blog_Images/auth0/text1.jpg'
import create_application from  '../Images/Blog_Images/auth0/text2.jpg'
import basic_information from '../Images/Blog_Images/auth0/text3.jpg'
import app_urs from '../Images/Blog_Images/auth0/text4.jpg'
import login_url from '../Images/Blog_Images/auth0/text5.jpg'
import { Code, Divider, Link} from '@chakra-ui/react'

import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/dark.css'
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

const Auth0 = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);


  const first_code = `// Import the necessary modules from React and react-router-dom
  import React from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import { Auth0Provider, useAuth0 } from '@auth0/auth0-react';
  
  // Define the main App component
  const App = () => {
    // Return the JSX for the App component
    return (
      // Use the Auth0Provider component to wrap the entire application
      <Auth0Provider
  
  // So this section is very important, do you remember we got some passwords? 
  // You need to write your app's passwords to these sections.
        domain="YOUR_AUTH0_DOMAIN" // Replace with your Auth0 domain
        clientId="YOUR_AUTH0_CLIENT_ID" // Replace with your Auth0 client ID
        redirectUri={window.location.origin} // Set the redirect URI to the current window's origin
      >
        {/* Use the React Router to define routes for different pages */}
        <Router>
          {/* Use the Switch component to render only one Route at a time */}
          <Switch>
            {/* Define a Route for the Home page */}
            <Route path="/" exact component={Home} />
            {/* Define a Route for the Profile page */}
            <Route path="/profile" component={Profile} />
            {/* Define a Route for the Login page */}
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      </Auth0Provider>
    );
  };
  
  // Define the Home component
  const Home = () => <h1>Welcome to the Home Page</h1>;
  
  // Define the Profile component
  const Profile = () => {
    // Destructure the useAuth0 hook to get authentication-related functions and state
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
    // isAuthenticated will return boolean, so you can write a logic 
    // if True then go to X website
  
    // Logout process is automatically created by useAuth0
  
  
    // Return JSX based on whether the user is authenticated or not
    return (
      <>
        {isAuthenticated ? ( // If the user is authenticated
          <>
            <h1>Welcome to Your Profile</h1>
            {/* Render a Logout button that calls the logout function */}
            <button onClick={() => logout({ returnTo: window.location.origin })}>Logout</button>
          </>
        ) : ( // If the user is not authenticated
          <button onClick={loginWithRedirect}>Login</button> // Render a Login button that calls the loginWithRedirect function
        )}
      </>
    );
  };
  
  // Define the Login component
  const Login = () => {
    // Destructure the useAuth0 hook to get the loginWithRedirect function
    const { loginWithRedirect } = useAuth0();
  
    // Render a Login button that calls the loginWithRedirect function when clicked
    return <button onClick={loginWithRedirect}>Login</button>;
  };
  
  // Export the App component as the default export
  export default App;`
  return (
    <div className='xl:pl-60 xl:pr-60 font-mono'>
            {/* HEADER */}
      <div className='text-3xl  mt-10 mb-4'>
        <h1>How to create a login system using AUTH0</h1>
      </div>

            {/* INTRODUCTION TEXT*/}
      <div className='mb-6 mt-2 flex justify-center text-wrap text-center'>
        <span className=' tracking-tighter'>
        AUTH0, a popular identity and access management platform can be used to create a robust login system for your web or mobile application. Here’s a step-by-step guide on how to create a basic login system using AUTH0.
        </span>
      </div>
      <Divider className='mt-10'/>
           {/* Section 2 */}
        <div className='text-2xl  mt-10 mb-2'>
          <span>
            SIGN UP
          </span>
      </div>
      <span>First of all, you need to sign up for the AUTH0 website. We are going to create our API with the help of this website.</span>
      <div className='flex justify-center h-full w-full'><img className = 'mt-4' src={signup}/></div>
      <div className='mt-4'><span>When you sign up, this user interface should welcome you. We are going to use the CREATE APPLICATION button which has a blue background.</span></div>
      <Divider className='mt-10'/>
           {/* Section 3 */}
      <div className='text-2xl  mt-10 mb-2'>
          <span>
          CREATE YOUR APPLICATION
          </span>
      </div>

            {/* Application IMAGE*/}
        <div className='mt-4 mb-4 flex justify-center w-full h-full'>
        <img 
        src={create_application}
        className='rounded'
        alt='create_application' />
      </div>

      <div><span>When you click the Create Application button, you are going to see this section. An input to write your app name and a part that you should choose the technology used in the project. For example, I will use REACT as an example.</span></div>
    
            {/* INFORMATION IMAGE*/}
        <div className='mt-4 mb-4 flex justify-center w-full h-full'>
        <img 
        src={basic_information}
        className='rounded'
        alt='information image' />
      </div>
    <div><span>When you filled the required fields, this section is going to display in the settings section. These 3 fields are very important for your project: Domain, Client ID, Client Secret so, to prevent vulnerability in your project. Don’t forget to add these fields to a .env file.</span></div>
    <Divider className='mt-10'/>
           {/* Section 4 */}
      <div className='text-2xl  mt-10 mb-2'>
          <span>
          Application URLs
          </span>
      </div>

      <div><span>“Application URLs” refer to the specific web addresses (URLs) associated with your application. These URLs are important settings in platforms like AUTH0 or any other identity and access management system, as they determine where users are redirected during the authentication process and after logging out. In a nutshell, you need to provide your domain if you want to use AUTH0.</span></div>
      <div className='flex justify-center h-full w-full mt-4 mb-4'>
      <img 
        src={app_urs}
        className='rounded'
        alt='App urls' />
      </div>
   

   <div>
    <div>
    <h2><u> Allowed Callback URLs:</u></h2>
      <p className=''>- These are the URLs where AUTH0 can redirect users after they have authenticated successfully.</p>
      <p className=''>- Callback URLs typically handle the authentication response from AUTH0, such as receiving and processing tokens.</p>
      <p className=''>- You need to whitelist these URLs in your AUTH0 application settings to ensure that authentication callbacks are handled securely.</p>
    </div>
   </div>

   <div>
    <div>
    <h2><u> Allowed Logout URLs:</u></h2>
      <p className=''>- These URLs specify where AUTH0 can redirect users after they log out of your application.</p>
      <p className=''>- After logging out, users are redirected to the specified logout URL to complete the logout process and clear their session.</p>
      <p className=''>- Similar to callback URLs, you must configure and whitelist logout URLs in your AUTH0 settings.</p>
    </div>
   </div>


   <div>
    <div>
    <h2><u> Allowed Web Origins:</u></h2>
      <p className=''>- Web origins represent the origins (i.e., domain and protocol) from which your application can make requests to AUTH0.</p>
      <p className=''>- It’s crucial to specify allowed web origins to prevent cross-origin security issues and ensure that your application can communicate securely with AUTH0.</p>
    </div>
   </div>


        {/* Application IMAGE*/}
      <div className='mt-4 mb-4 flex justify-center w-full h-full'>
        <img 
        src={login_url}
        className='rounded'
        alt='login' />
      </div>

    <div><span>So, we created our app on the browser and got a bunch of passwords to add AUTH0 to our project. Let’s create a REACT app and integrate it with the AUTH0 app.</span></div>

    <Divider className='mt-10'/>

           {/* Section 4 */}
     <div className='text-2xl  mt-10 mb-2'>
          <span>
          FRONTEND SETUP
          </span>
      </div>
      <Code colorScheme='green'>npm create vite@latest</Code>
      <div><span>Then open a terminal -or you can use any bash, even Github bash- and install the package AUTH0</span></div>
      <Code colorScheme='green'>npm install @auth0/auth0-react</Code>

      {/* Section 2 */}
      <div className='text-2xl  mt-10 mb-2'>
        <span>
        AUTH0 INTEGRATION
        </span>
      </div>
      <p className='h-full w-full '>
      <pre className='text-wrap'>
          <code className='hljs language-javascript'>
            {first_code}
          </code>
        </pre>
        </p>
      <div className='mt-10'><span>And, congratulations! Finally, AUTH0 is integrated with your app. And here is the important thing for you: Your passwords must stay safe! So you can’t add them directly to your project. You should use .ENV file. here is the link for you to learn how to manage:</span></div>


      <div className='ml-6 mb-6'>
              <Link href='https://www.npmjs.com/package/dotenv?source=post_page-----b20e84600754--------------------------------' color='teal.500' isExternal>
              - dotenv
            </Link>
      </div>
      <div><span>Also, I will share my repository which used AUTH0, you can check it out!</span></div>
      <div className='ml-6 mb-10'>
              <Link href='https://github.com/Doguhannilt/MERNappetite' color='teal.500' isExternal>
              - MERNappetite
            </Link>
      </div>
    </div>
  )
}

export default Auth0
