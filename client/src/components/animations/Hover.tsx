import { motion } from 'motion/react';
import { FC, ReactNode } from 'react';

const Hover: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<motion.div
			whileHover={{ y: -5 }}
			transition={{
				type: 'tween',
				ease: 'easeInOut',
				duration: 0.3,
			}}>
			{children}
		</motion.div>
	);
};

export default Hover;
