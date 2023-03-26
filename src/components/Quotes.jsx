import React, { useEffect, useState } from 'react';

const Quotes = () => {
  const [quote, setQuote] = useState([]);
  // const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('https://api.api-ninjas.com/v1/quotes?category=learning', {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'KRev7DslVYdLwqvXAAI9aw==vVzIoYVezJ0ueOjR',
      },
    })
      .then((resp) => resp.json())
      .then((data) => setQuote(data))
      .then(() => setLoading(false));
  }, []);

  if (loading) return <div> Loading! </div>;
  // if (err) return <div> No quotes available</div>;
  return (
    <div>
      <p className="quote">{quote[0].quote}</p>
      <p className="autor">{quote[0].author}</p>
    </div>
  );
};

export default Quotes;
