import { useState, useEffect } from "react";
import 'dotenv/config';


import "./App.css";

interface GithubUserProps {
  name: string;
  location: string;
  image: string;
}

interface GithubUserData {
  name: string;
  location: string;
  bio: string;
  avatar_url: string;
  
 
  // add any other properties you need from the GitHub API response
}

function GithubUser({ name, location, image }: GithubUserProps) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{location}</h1>
      <img src={image}></img>
    </div>
  );
}

function App() {
  // const [data, setData] = useState(null);
  const [data, setData] = useState<GithubUserData | null>(null);
  useEffect(() => {
    fetch(process.env.path!)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  if (data)
    return (
      <>
        <GithubUser name={data.name} location={data.bio} image={data.avatar_url} />
      </>
    );
}

export default App;
