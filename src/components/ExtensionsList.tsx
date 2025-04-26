import { useExtensionsStore } from '@/store/extensionsStore';
import Extension from './Extension';

const Extensions = () => {
  const extensions = useExtensionsStore((state) => state.extensions);

  return (
    <div className="grid gap-3 grid-cols-(--extensions-grid-cols)">
      {extensions.map((ext) => (
        <Extension key={ext.id} {...ext} />
      ))}
    </div>
  );
};

export default Extensions;
