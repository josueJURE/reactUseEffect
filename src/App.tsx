import { useState, useEffect } from "react";



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
  const [data, setData] = useState<GithubUserData | null>(null);
  const [laoding, setLoading] = useState<boolean>(false);
  const [error, setError] = useState(null)
  useEffect(() => {
    setLoading(true)
    fetch("")
      .then((response) => response.json())
      .then((data) => setData(data))
      .then(() => setLoading(false))
      .catch((data) => setError(data))
  }, []);
  if (laoding) return <h1>Data is loading</h1>
  if(error) return <pre>{JSON.stringify(error)}</pre>
  if (!data) return null
    return (
      <>
        <GithubUser name={data.name} location={data.bio} image={data.avatar_url} />
      </>
    );
}

export default App;
