import { Link } from 'next/navigation'

export default function NotFoundPage () {
  return (
    <div className="container page p404">
      <main className={`contents`}>
    
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <a href="/">Return Home</a>
      
      </main>
    </div>
  );
};
