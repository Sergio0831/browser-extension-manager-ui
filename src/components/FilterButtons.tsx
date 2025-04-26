import { useState } from 'react';
import Button from './ui/Button';

// type FilterButtonsProps = {};

const filterButtons = ['All', 'Active', 'Inactive'];

const FilterButtons = () => {
  const [filter, setFilter] = useState('All');

  return (
    <div className="flex gap-3">
      {filterButtons.map((btn) => (
        <Button
          key={btn}
          variant="primary"
          size="large"
          aria-pressed={filter === btn}
          onClick={() => setFilter(btn)}>
          {btn}
        </Button>
      ))}
    </div>
  );
};

export default FilterButtons;
