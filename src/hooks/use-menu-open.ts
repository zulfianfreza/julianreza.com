import { create } from "zustand";

interface MenuOpenStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useMenuOpen = create<MenuOpenStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useMenuOpen;
