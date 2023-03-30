import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getQuotes = () => {
      fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'KRev7DslVYdLwqvXAAI9aw==vVzIoYVezJ0ueOjR',
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          setLoading(false);
          setQuote(data);
        }, (err) => {
          setErr(err);
          setLoading(false);
        });
    };
    getQuotes();
  }, []);

  if (loading) return <div> Loading! </div>;
  if (err) return <div> No quotes available</div>;
  return (
    <div>
      <p className="phrase">{quote[0].quote}</p>
      <p className="author">{quote[0].author}</p>
    </div>
  );
};

export default Quotes;
