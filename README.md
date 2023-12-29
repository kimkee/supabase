# Learn to Supabase

[supabase.com](https://supabase.com)

<img src="https://supabase.com/docs/_next/image?url=%2Fdocs%2Fsupabase-dark.svg&w=96&q=75" width="200">

- 파이어베이스랑 비슷한데  관계형데이터베이스라는군!
```js
  import { useEffect, useState } from "react";
  import { createClient } from "@supabase/supabase-js";

  const supabase = createClient("https://<project>.supabase.co", "<your-anon-key>");

  function App() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
      getCountries();
    }, []);

    async function getCountries() {
      const { data } = await supabase.from("countries").select();
      setCountries(data);
    }

    return (
      <ul>
        {countries.map((country) => (
          <li key={country.name}>{country.name}</li>
        ))}
      </ul>
    );
  }

  export default App;
```
