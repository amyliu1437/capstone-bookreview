import './HomePage.scss';
import LatestComment from '../../components/LatestComment/LatestComment';
import TopRatedBooks from '../../components/TopRatedBooks/TopRatedBooks';

function Homepage(){
  return(
    <div>
    <LatestComment />
    <TopRatedBooks />
    </div>
  )
}


export default Homepage;