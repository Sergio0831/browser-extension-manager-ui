import { useExtensionsStore } from '@/store/extensionsStore';
import Extension from './Extension';

const Extensions = () => {
  const extensions = useExtensionsStore((state) => state.extensions);
  const filter = useExtensionsStore((state) => state.filter);

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'Active') return ext.isActive;
    if (filter === 'Inactive') return !ext.isActive;
    return true;
  });

  return (
    <div className="grid gap-3 grid-cols-(--extensions-grid-cols)">
      {filteredExtensions.map((ext) => (
        <Extension key={ext.id} id={ext.id} />
      ))}
    </div>
  );
};

export default Extensions;
