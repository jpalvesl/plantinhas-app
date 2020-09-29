import React, { createContext } from 'react';

import usePlants from '../hooks/usePlants';
import useFolders from '../hooks/useFolders';

const MainContext = createContext();


function MainProvider ({ children }) {
  const [plants, attPlants, addPlant] = usePlants('plants');
  const [syncPlants, attSyncPlants, addSyncPlant] = usePlants('syncPlants');
  const [folders, addFolder, addPart, editFolder] = useFolders('folders')

  return (
    <MainContext.Provider value={{ 
      plants, attPlants, addPlant,
      syncPlants, attSyncPlants, addSyncPlant,
      folders, addFolder, addPart, editFolder
      }}
    >
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainProvider };