// components/SideMenuContext.tsx
import React, { createContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SideMenuContextProps {
  children: React.ReactNode;
}

interface SideMenuState {
  cartOpen: boolean;
  invitationFormOpen: boolean;
}

interface SideMenuActions {
  openCart: () => void;
  closeCart: () => void;
  openInvitationForm: () => void;
  closeInvitationForm: () => void;
}

const initialSideMenuState: SideMenuState = {
  cartOpen: false,
  invitationFormOpen: false,
};

const SideMenuContext = createContext<SideMenuState & SideMenuActions>({
  ...initialSideMenuState,
  openCart: () => {},
  closeCart: () => {},
  openInvitationForm: () => {},
  closeInvitationForm: () => {},
});

export const SideMenuProvider: React.FC<SideMenuContextProps> = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);
  const [invitationFormOpen, setInvitationFormOpen] = useState(false);

  const openCart = () => setCartOpen(true);
  const closeCart = () => setCartOpen(false);
  const openInvitationForm = () => setInvitationFormOpen(true);
  const closeInvitationForm = () => setInvitationFormOpen(false);
  // Add property type...

  return (
    <SideMenuContext.Provider
      value={{
        cartOpen,
        invitationFormOpen,
        openCart,
        closeCart,
        openInvitationForm,
        closeInvitationForm,
      }}
    >
      {children}
    </SideMenuContext.Provider>
  );
};

export const useSideMenu = () => React.useContext(SideMenuContext);
