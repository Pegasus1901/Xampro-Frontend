// // This is app.js for voice module
// import React, { useState } from 'react'
// import Home from './Home'
// import Blog from './Blog'
// import Contact from './Contact'
// import NewPost from './NewPost'
// import { BrowserRouter, Route, Routes, Link, redirect } from 'react-router-dom'
// import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


// const Nav = () => {

//   const commands =[
//     {
//       command: ["Go to *", "Open *"],
//       callback: (redirectPage) => setRedirectUrl(redirectPage),
//     },
//   ];
//   const {transcript} = useSpeechRecognition({commands});
//   const [redirectUrl,setRedirectUrl] = useState("");  

//   const pages = ["home","blog","new blog post","contact"];
//   const urls= {
//     home:"/",
//     blog:"/blog",
//     "new blog post" : "/neww",
//     contact: "/contact",
//   };

//   // if (!browserSupportsSpeechRecognition) {
//   //   // Render some fallback content
//   //   return null;
//   // }
//   let redirection = "";

//   if(redirectUrl){
//     if(pages.includes(redirectUrl)){
//       redirection = redirect(urls[redirectUrl])
//     }else{
//       redirection = <p>Could not find page</p>
//     }

//   }

//   return (
//     <div>
//       <BrowserRouter>
//         <div id="links">
//           <Link to='/'>Home</Link>
//           <Link to='/blog'>Blog</Link>
//           <Link to='/contact'>Contact</Link>
//           <Link to='/neww'>NewPost</Link>
//         </div>

//         <Routes>
//           <Route path='/' exact element={<Home />} />
//           <Route path='/home' element={<Home />} />
//           <Route path='/blog' element={<Blog />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/neww' element={<NewPost />} />
//         </Routes>

//         {redirection}
//       </BrowserRouter>
//       {/* <p id="transcript">Transcript: {transcript}</p> */}
//       <button onClick={SpeechRecognition.startListening}>Start</button>
//     </div>
//   )
// }

// export default Nav

import React, { useState } from 'react'
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'
import NewPost from './NewPost'
import { BrowserRouter, Route, Routes, Link, useNavigate } from 'react-router-dom'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'


const Nav = () => {

  const commands = [
    {
      command: ["Go to *", "Open *"],
      callback: (redirectPage) => setRedirectUrl(redirectPage),
    },
  ];
  const { transcript } = useSpeechRecognition({ commands });
  const navigate = useNavigate();
  const [redirectUrl, setRedirectUrl] = useState("");

  const pages = ["home", "blog", "new blog post", "contact"];
  const urls = {
    home: "/login",
    blog: "/profile",
    
  };

  let redirection = "";

  if (redirectUrl) {
    if (pages.includes(redirectUrl)) {
      navigate(urls[redirectUrl]);
    } else {
      redirection = <p>Could not find page</p>
    }
  }

  if (transcript) {
    console.log(transcript.property);
  } else {
    console.log("myObject is null or undefined");
  }

  return (
    <div>
      {/* <BrowserRouter> */}
        <div id="links">
          <Link to='/'>Home</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/neww'>NewPost</Link>
        </div>
        
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/neww' element={<NewPost />} />
        </Routes>

        {redirection}
      {/* </BrowserRouter> */}
      
      <p id="transcript">Transcript: {transcript}</p>
      <button onClick={SpeechRecognition.startListening}>Start</button>
    </div>
  )
}

export default Nav
