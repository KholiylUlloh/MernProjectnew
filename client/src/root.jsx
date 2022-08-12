import React, { useEffect, useState} from 'react'

const Root = () => {
  const [data, setData] = useState([]);

  useEffect(()=> {
    fetch('/api')
    .then(res => res.json())
    .then(data => setData(data.data))
  }, []);
  return (
    <div>
      <h1>{!data ? "loading" : data}</h1>
    </div>
  )
}

export default Root