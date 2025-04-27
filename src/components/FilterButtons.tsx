import Button from './ui/Button';
import { Filter, useExtensionsStore } from '@/store/extensionsStore';

// type FilterButtonsProps = {};

const filterButtons: Filter[] = ['All', 'Active', 'Inactive'];

const FilterButtons = () => {
  const filter = useExtensionsStore((state) => state.filter);
  const setFilter = useExtensionsStore((state) => state.setFilter);

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
