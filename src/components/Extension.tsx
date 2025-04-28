import { LazyLoadImage } from 'react-lazy-load-image-component';
import Button from './ui/Button';
import { Switch } from './ui/Switch';
import { useExtensionsStore } from '@/store/extensionsStore';
import 'react-lazy-load-image-component/src/effects/blur.css';

type ExtensionProps = {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

const Extension = ({ id, logo, name, description, isActive }: ExtensionProps) => {
  const openModal = useExtensionsStore((state) => state.openModal);
  const toggleExtension = useExtensionsStore((state) => state.toggleExtension);

  return (
    <div
      className="transition-colors grid bg-card h-[12.5rem] rounded-20 border-1 border-border p-5 shadow-3 dark:shadow-none"
      key={id}>
      <div className="flex gap-x-4 items-start ">
        <LazyLoadImage
          className="w-[60px] h-[60px] object-contain"
          src={`/images/${logo}`}
          alt={name}
          effect="blur"
          placeholderSrc={`/images/${logo}`}
        />
        <div className="flex-1">
          <h2 className="text-preset-2 mb-2">{name}</h2>
          <p className="text-preset-5 text-muted">{description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between mt-auto">
        <Button
          variant="transparent"
          size="small"
          className="ring-offset-card"
          onClick={() => openModal(id)}>
          Remove
        </Button>
        <Switch onCheckedChange={() => toggleExtension(id)} checked={isActive} />
      </div>
    </div>
  );
};

export default Extension;
