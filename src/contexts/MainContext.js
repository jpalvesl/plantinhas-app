import React, { createContext } from 'react';

import useStorage from '../hooks/useStorage';

const MainContext = createContext();


function MainProvider ({ children }) {
  const [plants, attPlants, addPlant] = useStorage('plants');
  const [syncPlants, attSyncPlants, addSyncPlant] = useStorage('syncPlants');
  const [folders, setFolders, addFolder] = useStorage('folders')

  return (
    <MainContext.Provider value={{ 
      plants, attPlants, addPlant,
      syncPlants, attSyncPlants, addSyncPlant,
      folders, setFolders, addFolder 
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainProvider };