import './Player.css'
import back_arrow from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {

  const {id} = useParams()

  const navigate = useNavigate()

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZWI3MWE2NjM4ZDBlNjNhNmMzYTE2ZDViOGVhYmZhZCIsIm5iZiI6MTU4MTg4NDk2Ni4yMDEsInN1YiI6IjVlNDlhNjI2MzU4MTFkMDAxOTQ4OWJlNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MA35N0jVyTHwRjWf5UevhuR9O6HR64wpd6aZvhi36lE'
    }
  };
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
  }, [])

  

  return (
    <div className='player'>
        <img src={back_arrow} alt="back arrow" onClick={()=>{navigate(-2)}}/>
        <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width="90%" height="90%" title='trailer' frameBorder="0" allowFullScreen></iframe>
        <div className="player-info">
          <p>Published Date: {apiData.published_at.slice(0,10)}</p>
          <p>Name: {apiData.name}</p>
          <p>Type: {apiData.type}</p>
        </div>
    </div>
  )
}

export default Player
