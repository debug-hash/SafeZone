type TitleProps = {
	start: string;
	end: string;
};

const Title = (props: TitleProps) => {
	return (
		<h3 className='h3 mb-3 fw-bold'>
			{props.start} <span className='text-body-tertiary'>{props.end}</span>
		</h3>
	);
};

export default Title;
