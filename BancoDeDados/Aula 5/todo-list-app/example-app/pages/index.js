// import { useEffect, useState } from 'react';

const URL = process.env.BASE_URL;

export default function Home({ movies: moviesArray }) {
  
  // const moviesArray = isConnected ? movies: [];

  // const [moviesArray, setMoviesArray] = useState([]);

  // async function getMovies() {
    

  //   return movies

  //   // setMoviesArray(movies);
  // }

  // useEffect(() => {
  //   getMovies().then(()=>{

  //   })
  // }, []);

  return (
    <div className='container'>
      <h1>Filmes de 2010</h1>
      <ul>
          { moviesArray.map((movie, index) =>{
            return <li key={index}>{ movie.title }</li>
          })}
      </ul>
    </div>
  )
}

export async function getServerSideProps(context){
  const response =  await fetch(URL + "api/movies");
  const movies = await response.json();

  return {
    props: { movies }
  }

}

// export async function getServerSideProps(context) {
//   try {
//     await clientPromise
//     // `await clientPromise` will use the default database passed in the MONGODB_URI
//     // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:
//     //
//     // `const client = await clientPromise`
//     // `const db = client.db("myDatabase")`
//     //
//     // Then you can execute queries against your database like so:
//     // db.find({}) or any of the MongoDB Node Driver commands
    
//     const client = await clientPromise;
//     const db = client.db("sample_mflix");

//     const movies = await db.collection("movies").find({ year: 2010}).sort({title: 1}).toArray();

//     const moviesArray = movies.map(( movie ) =>  movie.title );
    
//     console.log(movies);  
//     return {
//       props: { isConnected: true, movies: moviesArray},
//     }
//   } catch (e) {
//     console.error(e)
//     return {
//       props: { isConnected: false },
//     }
//   }
// }
