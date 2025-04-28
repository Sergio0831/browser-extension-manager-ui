import { useStore } from '@/store/extensionsStore';
import Extension from './Extension';
import { AnimatePresence, motion } from 'motion/react';

const Extensions = () => {
  const { extensions, filter } = useStore();

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'Active') return ext.isActive;
    if (filter === 'Inactive') return !ext.isActive;
    return true;
  });

  return (
    <div className="grid gap-3 grid-cols-(--extensions-grid-cols)">
      <AnimatePresence>
        {filteredExtensions.map((ext) => (
          <motion.div
            key={ext.id}
            layout="position"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              opacity: { duration: 0.2 },
              scale: { type: 'spring', stiffness: 500, damping: 30 },
              layout: { duration: 0.4 },
            }}>
            <Extension key={ext.id} {...ext} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default Extensions;
