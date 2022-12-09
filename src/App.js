import { useEffect, useState } from 'react';
import Filter from './components/Filter';
import Movie from './components/Movie'
import { motion, AnimatePresence } from 'framer-motion'
import './App.scss';

function App() {
  const [populars, setPopulars] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeList, setActiveList] = useState(0);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=909e55fe957a121bd001e456d7d35c4c&language=en-US&page=1')
    const movies = await data.json();
    setPopulars(movies.results);
    setFiltered(movies.results);
  }

  return (
    <div>
      <Filter
        populars={populars}
        setFiltered={setFiltered}
        activeList={activeList}
        setActiveList={setActiveList}
      />
      <motion.div layout className='popular-movies'>
        <AnimatePresence>
          {
            filtered.map(popular => <Movie
              key={popular.id}
              popular={popular} />
            )
          }
        </AnimatePresence>
      </motion.div>
    </div >
  );
}

export default App;
