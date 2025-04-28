import { motion, type Variants } from 'motion/react';
import Button from './ui/Button';
import { Filter, useStore } from '@/store/extensionsStore';

const filterButtons: Filter[] = ['All', 'Active', 'Inactive'];

const containerVariants: Variants = {
  closed: {},
  open: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const buttonVariants: Variants = {
  closed: {
    opacity: 0,
    y: 10,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 500, damping: 30 },
  },
};

const FilterButtons = () => {
  const { filter, setFilter } = useStore();

  return (
    <motion.div className="flex gap-3" initial="closed" animate="open" variants={containerVariants}>
      {filterButtons.map((btn) => (
        <motion.div key={btn} variants={buttonVariants}>
          <Button
            key={btn}
            variant="primary"
            size="large"
            aria-pressed={filter === btn}
            onClick={() => setFilter(btn)}>
            {btn}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FilterButtons;
