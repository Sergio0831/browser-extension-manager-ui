import { create } from 'zustand';
import extensionsData from '../data.json';

export type ExtensionType = {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

type ExtensionsStore = {
  extensions: ExtensionType[];

  // Modal state
  isModalOpen: boolean;
  extensionToRemove: ExtensionType | null;
  openModal: (extensionId: string) => void;
  closeModal: () => void;
};

export const useExtensionsStore = create<ExtensionsStore>()((set) => ({
  extensions: extensionsData,
  extensionToRemove: null,

  isModalOpen: false,
  openModal: (extensionId: string) =>
    set((state) => ({
      isModalOpen: true,
      extensionToRemove: state.extensions.find((ext) => ext.id === extensionId) || null,
    })),
  closeModal: () =>
    set({
      isModalOpen: false,
      extensionToRemove: null,
    }),
}));
