import React, { useEffect } from 'react'

import {Code, Divider, Link, Stack} from '@chakra-ui/react'
import hljs from 'highlight.js/lib/core';
import 'highlight.js/styles/dark.css'
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

// IMAGES
import blog_introduction from '../Images/Blog_Images/jwt/jwt_introduction.jpg'


  const first_code =  `const jwt = require('jsonwebtoken');

  // Example user data
  const user = {
    id: 1,
    username: 'example_user',
    email: 'user@example.com',
    role: 'admin' // Example role 
  };
  
  // Secret key for JWT
  const secretKey = 'your_secret_key';
  
  // Function to generate JWT token
  function generateToken(user) {
    const token = jwt.sign(user, secretKey, { expiresIn: '1h' }); // Expires in 1 hour
    return token;
  }
  
  // Example usage:
  const authToken = generateToken(user);
  console.log('Generated JWT token:', authToken);`

  const second_code = `// Middleware to verify JWT token
  jwt.verify(authToken, secretKey, (err, decoded) => {
    if (err) {
      // If there's an error (e.g., invalid token), return a 403 Forbidden response
      return res.status(403).json({ message: 'Forbidden: Invalid token' });
    }
  
    // Store decoded user information in the request object
    req.user = decoded;
    // Proceed to the next middleware
    next();
  });
  
  // Example API endpoint
  app.get('/api/data', verifyToken, (req, res) => {
    // Check the decoded JWT for user identity information
    if (!req.user || !req.user.userId) {
      // If user identity information is not found, return a 403 Forbidden response
      return res.status(403).json({ message: 'Forbidden: User ID not found' });
    }
  
    // Process user access rights and requests, and send the appropriate response
    const userId = req.user.userId;
    const userName = req.user.username;
    res.json({ message: 'User identity verified', userId, userName });
  });
  
  // Start the server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log("Server is running on port {PORT}");
  });`
  

const third_code = `const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key';

// Middleware to parse JSON data
app.use(bodyParser.json());

// In-memory database (for demonstration purposes)
let users = [
    { id: 1, username: 'user1', password: 'password1' },
    { id: 2, username: 'user2', password: 'password2' }
];

// Login route to generate JWT token
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY);
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.user = decoded;
        next();
    });
};

// Protected route (CRUD operations)
app.get('/data', verifyToken, (req, res) => {
    // Here you can perform Read operations
    res.json({ message: 'Read data' });
});

app.post('/data', verifyToken, (req, res) => {
    // Here you can perform Create operation
    res.json({ message: 'Create data' });
});

app.put('/data/:id', verifyToken, (req, res) => {
    // Here you can perform Update operation
    const id = req.params.id;
    res.json({ message:"Update data with ID {id} "});
});

app.delete('/data/:id', verifyToken, (req, res) => {
    // Here you can perform Delete operation
    const id = req.params.id;
    res.json({ message:"Delete data with ID {id}"});
});

// Start the server
app.listen(PORT, () => {
    console.log("Server is running on http://localhost:{PORT}");
});`

const liste = [ ".NET" ,"C#", "VB.Net", "C","Go","Java","JavaScript","Node.js","OCaml,Perl","PHP","Python","Racket","Raku","Ruby","Rust"]

const JWT = () => {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
  
  return (
    <div className='xl:pl-60 xl:pr-60 font-mono text-white'>
      
      {/* HEADER */}
      <div className='text-3xl  mt-10'>
      <h1>What is JWT (Jsonwebtoken)</h1>
      </div>

      {/* HEADER IMAGE*/}
      <div className='mt-4 mb-4 flex justify-center'>
        <img 
        src={blog_introduction}
        className='rounded'
        alt='jwt_introduction' />
      </div>

      {/* INTRODUCTION TEXT*/}
      <div className='mb-6 flex justify-center text-wrap text-center'>
      <span className=' tracking-tighter'>
      JWT (JSON Web Token) is a standard used for authentication and authorization in web applications. JWT is commonly used to manage user sessions, authenticate user identities, and ensure secure communication. Essentially, the architecture of JWT consists of three main components: Header, Payload, and Signature.
      </span>
      </div>
      <span className=' flex justify-center'>
      All these components will be explained in the Process of How JSON Web Tokens (JWT) Work section.
      </span>

      {/* Section 2 */}
      <div className='text-2xl  mt-10 mb-2'>
        <span>
        Process of how JSON Web Tokens (JWT) work
        </span>
      </div>

      <div className=''>
      <h2><u>User Authentication:</u></h2>
      <p className='mb-4'>The process starts when a user logs into a web application using their credentials (e.g., username and password). The server verifies these credentials to authenticate the user’s identity.</p>

      <h2><u>JWT Creation:</u></h2>
      <p className='mb-4'>After successful authentication, the server generates a JWT. The JWT consists of three parts: Header, Payload, and Signature.</p>

      <h2><u>Header Generation:</u></h2>
      <p >The Header contains metadata about the JWT, such as the type (`typ`) and the hashing algorithm (`alg`) used for signature generation.</p>
      <code className='mb-4 bg-gray-600'>{`{“alg”: “HS256”, “typ”: “JWT”}`}</code>

      <h2 className='mt-4'><u>Payload Inclusion:</u></h2>
      <p >The Payload carries the claims or information about the user. Common claims include user ID, username, role, and any additional data relevant to the application’s functionality.</p>
      <code className='mb-4 bg-gray-600'>{`{“user_id”: 12345, “username”: “example_user”, “role”: “admin”}`}</code>

      <h2 className='mt-4'><u>Signature Generation:</u></h2>
      <p className='mb-4'>The server combines the Header and Payload and then generates a digital signature using a secret key and the specified hashing algorithm (e.g., HMAC SHA-256). This signature ensures that the JWT has not been tampered with during transmission.</p>

      <h2><u>JWT Issuance:</u></h2>
      <p>Once the JWT is created, it is sent back to the client (user) as part of the authentication response. The client receives the JWT and stores it securely, usually in local storage or a cookie.</p>
    </div>

    <div>
      <p className='mt-10 mb-6 font-bold'>More details:</p>
    </div>

    <p>JWT Creation on Server Side: When a user successfully authenticates (e.g., by providing correct credentials), the server generates a JWT using a secret key and includes the user’s information (such as user ID, username, role, etc.) in the JWT payload. The payload is then signed using the secret key to create the JWT.</p>

    <div className='mb-10'>
      <h3 className='mt-6'>Sending JWT to Client:</h3>
      <ul>
        <li>Once the JWT is created, it is sent back to the client as part of the authentication response.</li>
        <li>This can be done by including the JWT in the response body as a JSON object or in the response headers (e.g., Authorization header with the value Bearer &lt;JWT&gt;).</li>
        <li>The specific method depends on the API design and implementation.</li>
      </ul>

    <div className=''>
      <h3 className='mt-6'>Client Storage of JWT:</h3>
      <p>Upon receiving the JWT, the client (typically a web browser in the case of web applications) stores it securely. Common storage options include:</p>
      <ul className='ml-4'>
        <li ><strong>- Local Storage:</strong> The JWT can be stored in the browser’s local storage, which provides a persistent storage mechanism across sessions.</li>
        <li><strong> - Cookies:</strong> Alternatively, the JWT can be stored in an HTTP cookie. Cookies have the advantage of being automatically included in subsequent HTTP requests to the server, but they may have size limitations and can be vulnerable to certain attacks (e.g., CSRF if not properly secured).</li>
      </ul>
      </div>
    </div>

      <div><span className='font-bold hidden md:block'>Example:</span></div>
      <Code className=' md:w-full md:h-full'><pre className='hidden md:block md:w-full md:h-full mt-6 '><code className='hljs language-javascript'>{first_code}</code></pre></Code>

      <div className='md:mt-6'>
        <h2><u>Payload Decoding:</u></h2>
        <p className='md:mb-4'>If the signature is valid, the server decodes the JWT’s Payload to retrieve the user’s claims and information. This information is used to authenticate the user’s identity and determine access rights to the requested resource.</p>
      </div>
      <Code className='hidden md:block md:h-full md:w-full'><pre className='hidden md:block md:h-full md:w-full'><code className='hljs language-javascript'>{second_code}</code></pre></Code>


      <div className='md:mt-10 mb-4'>
        <div className='md:text-2xl md:mb-4 hidden md:block md:h-full md:w-full'><span>A CRUD EXAMPLE WITH JWT IN JAVASCRIPT</span></div>
        <Code colorScheme='blue' className=' md:w-full md:h-full hidden md:block'><pre className='hidden md:block md:h-full md:w-full'><code className='hljs language-javascript'>{third_code}</code></pre></Code>
      </div>

      <span className=''>An example repository used JWT for the login system:</span>
      <div className='ml-6 mb-6'>
              <Link href='https://github.com/Doguhannilt/Hotel-books' color='teal.500' isExternal>
              - Chakra Design system
            </Link>
      </div>

      <div>
        <div className='mb-4'> <span className='text-2xl'>ADVANTAGES AND DISADVANTAGES OF JWT</span></div>  
        <div className='mt-2'>
          <span className='font-bold'>Advantages of JWT:</span>
        </div>
        
        <div className='mt-10'>
          <div className='mb-6'>
        <h2><u>Stateless Nature:</u></h2>
        <p>JWTs are stateless tokens, meaning the server does not need to keep track of the token’s state or store it in a session store. This reduces server-side storage and improves scalability.</p>
        <p>Example: In a microservices architecture, each service can validate JWT independently without the need for a centralized session management system.</p>
          </div>
          <div className='mb-6'>
        <h2><u>Enhanced Security:</u></h2>
        <p>JWTs are digitally signed, ensuring data integrity and authentication. They also support encryption for added security.</p>
        <p>Example: A web application uses JWTs to authenticate users. The server signs the JWT using a secret key, preventing unauthorized modifications.</p>
          </div>
          <div className='mb-6'>
        <h2><u>Interoperability:</u></h2>
        <p>JWTs are widely supported across different platforms, programming languages, and frameworks, making them highly interoperable.</p>
        <p>Example: An API generates JWTs that can be used by various client applications developed in different programming languages such as JavaScript, Python, or Java.</p>
          </div>
          <div className='mb-6'>
        <h2><u>Reduced Database Lookups:</u></h2>
        <p> JWTs can contain user claims or permissions, reducing the need for frequent database lookups during each request.</p>
        <p>Example: A JWT includes user roles and permissions. The server can trust these claims without querying the database for user details repeatedly.</p>
          </div>
        </div>
        <div className='mb-2 mt-2'>
          <span className='font-bold'>Disadvantages of JWT:</span>
        </div>
      </div>
      <div className='mt-10'>
          <div className='mb-6'>
        <h2><u> Increased Token Size:</u></h2>
        <p>JWTs can become large if they carry a lot of user information or additional metadata, leading to increased network overhead.</p>
        <p>Example: A JWT includes user profile information, access permissions, and metadata, resulting in a large token size that affects network performance.</p>
          </div>
          <div className='mb-6'>
        <h2><u> Limited Token Revocation:</u></h2>
        <p>JWTs have a limited revocation mechanism since they are valid until their expiration time. Immediate revocation or invalidation of JWTs can be challenging.</p>
        <p>Example: If a user logs out or their permissions change, their JWT may remain valid until it expires, posing a security risk.</p>
          </div>
          <div className='mb-6'>
        <h2><u>Sensitive Data Exposure:</u></h2>
        <p>Unless encrypted, JWTs store user information in a base64-encoded format, which can be decoded to reveal sensitive data.</p>
        <p>Example: A JWT containing a user’s email address and role can be decoded to expose these details, potentially compromising user privacy.</p>
          </div>
          <div className='mb-6'>
        <h2><u>Token Expiry Management:</u></h2>
        <p> Managing token expiration and renewal requires careful consideration to balance security and user experience.</p>
        <p>Example: Setting token expiration too short may inconvenience users with frequent re-authentication, while setting it too long may increase security risks if tokens are compromised.</p>
          </div>
        </div>

        <div className='text-2xl mt-6'><span>IMPLEMENTATIONS (POPULARS)</span></div>
        {liste.map((item, index) => (<div key={index}> - {item}</div>))}
        <div className='mt-6 mb-10'>
          <span className='text-2xl'>CONCLUSION</span>
          <div>So, All you read in this article is the beginning of a journey. Knowing JWT is necessary if your job is about the internet. Thanks for reading!</div>
        </div>
    </div>
  )
}

export default JWT
