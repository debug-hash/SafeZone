import { motion } from 'motion/react';
import { FC, ReactNode } from 'react';

const Hover: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<motion.div
			whileHover={{ scale: 1.1 }}
			whileTap={{ scale: 0.9 }}
			transition={{ type: 'spring', stiffness: 300, damping: 20 }}>
			{children}
		</motion.div>
	);
};

export default Hover;
