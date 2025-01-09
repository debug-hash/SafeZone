import BestSalerCollection from '@/components/ui/BestSalerCollection';
import Hero from '@/components/ui/Hero';
import LatestCollection from '@/components/ui/LatestCollection';
import NewsBox from '@/components/ui/NewsBox';
import Promo from '@/components/ui/Promo';

const Home = () => {
	return (
		<>
			<Hero />
			<Promo />
			<LatestCollection />
			<BestSalerCollection />
			<NewsBox />
		</>
	);
};

export default Home;
