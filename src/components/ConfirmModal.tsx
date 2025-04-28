import { useStore } from '@/store/extensionsStore';
import Button from './ui/Button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from './ui/Dialog';

const ConfirmModal = () => {
  const { isModalOpen, extensionToRemove, closeModal, removeExtension } = useStore();

  return (
    <Dialog open={isModalOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Remove Extension</DialogTitle>
          <DialogDescription>
            Do you really want to remove {extensionToRemove?.name} extension?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              variant="destructive"
              size="small"
              className="ring-offset-card text-destructive-foreground"
              onClick={() => removeExtension(extensionToRemove?.id || '')}>
              Remove
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="primary" size="small" className="ring-offset-card text-preset-6">
              Cancel
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
