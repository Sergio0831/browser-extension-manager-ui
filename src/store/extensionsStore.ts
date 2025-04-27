import { create } from 'zustand';
import extensionsData from '../data.json';

export type ExtensionType = {
  id: string;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
};

export type Filter = 'All' | 'Active' | 'Inactive';

type ExtensionsStore = {
  extensions: ExtensionType[];
  // Function to remove an extension by ID
  removeExtension: (id: string) => void;
  // Function to toggle the active state of an extension
  toggleExtension: (id: string) => void;
  // Function to filter extensions based on their active state
  filter: Filter;
  setFilter: (filter: Filter) => void;

  // Modal state
  isModalOpen: boolean;
  extensionToRemove: ExtensionType | null;
  openModal: (id: string) => void;
  closeModal: () => void;
};

export const useExtensionsStore = create<ExtensionsStore>()((set) => ({
  extensions: extensionsData,
  filter: 'All',

  removeExtension(extensionId) {
    set((state) => ({
      extensions: state.extensions.filter((ext) => ext.id !== extensionId),
    }));
  },

  toggleExtension(extensionId) {
    set((state) => ({
      extensions: state.extensions.map((ext) =>
        ext.id === extensionId ? { ...ext, isActive: !ext.isActive } : ext,
      ),
    }));
  },

  setFilter(filter) {
    set({ filter });
  },

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
