import './HomePage.scss';
import LatestComment from '../../components/LatestComment/LatestComment';
import TopRatedBooks from '../../components/TopRatedBooks/TopRatedBooks';
import HeroBanner from '../../components/HeroBanner/HeroBanner';

function Homepage(){
  return(
    <div className="homepage">
    <HeroBanner />
    <LatestComment />
    <TopRatedBooks />
    </div>
  )
}


export default Homepage;