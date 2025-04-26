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
};

export const useExtensionsStore = create<ExtensionsStore>((set) => ({
  extensions: extensionsData,
}));
