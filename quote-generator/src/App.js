import { useState, useEffect } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // Function to fetch a random quote
  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  // useEffect to fetch a quote when the component mounts
  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h2>Random Quote Generator</h2>
      <blockquote>
        <p>"{quote}"</p>
        <footer>— {author}</footer>
      </blockquote>
      <button onClick={fetchQuote}>Get New Quote</button>
    </div>
  );
}

export default App;
