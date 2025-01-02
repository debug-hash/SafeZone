import { Link } from 'react-router';

const Hero = () => {
	return (
		<section className='px-4 py-5 my-5 text-center'>
			<h1 className='display-5 fw-bold text-body-emphasis text-uppercase'>
				The Wait Is Finally Over!
			</h1>
			<div className='col-lg-6 mx-auto'>
				<p className='lead mb-4'>
					The Ultimate AI Experience - Yoga Slim 7i eSale Edition is
					here! Enjoy launch offers upto 30K with Exchange, Cashback,
					EMI+ 10% Reward points!
				</p>
				<div className='d-grid gap-2 d-sm-flex justify-content-sm-center'>
					<Link
						to={''}
						className='btn btn-primary px-4 gap-3'>
						Shop Now
					</Link>
					<Link
						to={''}
						className='btn btn-primary px-4'>
						Discover eSale
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
