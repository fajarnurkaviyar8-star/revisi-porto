import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PortfolioImageContextType {
  profileImage: string;
  projectImage: string;
  isProjectCustom: boolean;
  isProfileCustom: boolean;
  setProfileImage: (url: string) => void;
  setProjectImage: (url: string) => void;
  resetProfileImage: () => void;
  resetProjectImage: () => void;
  openEditor: (tab?: 'profile' | 'project') => void;
  closeEditor: () => void;
  isEditorOpen: boolean;
  activeEditorTab: 'profile' | 'project';
  setActiveEditorTab: (tab: 'profile' | 'project') => void;
}

const STORAGE_KEY_PROFILE = 'fnk_portfolio_profile_image';
const STORAGE_KEY_PROJECT = 'fnk_portfolio_project_image';

const PortfolioImageContext = createContext<PortfolioImageContextType | undefined>(undefined);

export const PortfolioImageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profileImage, setProfileImageState] = useState<string>(PORTFOLIO_DATA.profile.avatarPlaceholder);
  const [projectImage, setProjectImageState] = useState<string>(PORTFOLIO_DATA.featuredProject.imageIllustration);
  const [isProfileCustom, setIsProfileCustom] = useState<boolean>(false);
  const [isProjectCustom, setIsProjectCustom] = useState<boolean>(false);
  const [isEditorOpen, setIsEditorOpen] = useState<boolean>(false);
  const [activeEditorTab, setActiveEditorTab] = useState<'profile' | 'project'>('profile');

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedProfile = localStorage.getItem(STORAGE_KEY_PROFILE);
      if (savedProfile) {
        setProfileImageState(savedProfile);
        setIsProfileCustom(true);
      }

      const savedProject = localStorage.getItem(STORAGE_KEY_PROJECT);
      if (savedProject) {
        setProjectImageState(savedProject);
        setIsProjectCustom(true);
      }
    } catch (e) {
      console.warn('Gagal memuat foto dari penyimpanan lokal browser', e);
    }
  }, []);

  const setProfileImage = (newImage: string) => {
    try {
      localStorage.setItem(STORAGE_KEY_PROFILE, newImage);
      setProfileImageState(newImage);
      setIsProfileCustom(true);
    } catch (e) {
      console.warn('Gagal menyimpan foto ke localStorage (mungkin ukuran file terlalu besar)', e);
      setProfileImageState(newImage);
      setIsProfileCustom(true);
    }
  };

  const setProjectImage = (newImage: string) => {
    try {
      localStorage.setItem(STORAGE_KEY_PROJECT, newImage);
      setProjectImageState(newImage);
      setIsProjectCustom(true);
    } catch (e) {
      console.warn('Gagal menyimpan screenshot ke localStorage', e);
      setProjectImageState(newImage);
      setIsProjectCustom(true);
    }
  };

  const resetProfileImage = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_PROFILE);
    } catch (e) {
      // ignore
    }
    setProfileImageState(PORTFOLIO_DATA.profile.avatarPlaceholder);
    setIsProfileCustom(false);
  };

  const resetProjectImage = () => {
    try {
      localStorage.removeItem(STORAGE_KEY_PROJECT);
    } catch (e) {
      // ignore
    }
    setProjectImageState(PORTFOLIO_DATA.featuredProject.imageIllustration);
    setIsProjectCustom(false);
  };

  const openEditor = (tab: 'profile' | 'project' = 'profile') => {
    setActiveEditorTab(tab);
    setIsEditorOpen(true);
  };

  const closeEditor = () => {
    setIsEditorOpen(false);
  };

  return (
    <PortfolioImageContext.Provider
      value={{
        profileImage,
        projectImage,
        isProfileCustom,
        isProjectCustom,
        setProfileImage,
        setProjectImage,
        resetProfileImage,
        resetProjectImage,
        openEditor,
        closeEditor,
        isEditorOpen,
        activeEditorTab,
        setActiveEditorTab
      }}
    >
      {children}
    </PortfolioImageContext.Provider>
  );
};

export const usePortfolioImages = (): PortfolioImageContextType => {
  const context = useContext(PortfolioImageContext);
  if (!context) {
    throw new Error('usePortfolioImages must be used within a PortfolioImageProvider');
  }
  return context;
};
