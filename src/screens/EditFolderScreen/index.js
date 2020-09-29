import React, { useState, useEffect, useContext } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Container, InputView, CheckButton, ButtonText } from './styles';

import { MainContext } from '../../contexts/MainContext';

import Header from '../../components/Header';
import Input from '../../components/Input';

function EditFolder() {
  const [city, setCity] = useState('')
  const [state, setState] = useState('')

  const { editFolder, plants, attPlants } = useContext(MainContext)

  const navigation = useNavigation()
  const route = useRoute()

  const folderIndex = route.params.folderIndex
  const folder = route.params.folder

  useEffect(() => {
    (() => {
      setCity(folder.city)
      setState(folder.state)
    })()
  }, [])


  function handleEditFolder() {
    const newFolder = {
      city,
      state,
      parts: [...folder.parts]
    }

    const newPlants = plants.map(plant => {
      if (plant.city === folder.city && plant.state === folder.uf) {
        return {
          ...plant,
          ['city']: city,
          ['state']: state,
        }
      }
      
      return {
        ...plant
      }
    })

    editFolder(folderIndex, newFolder)
    attPlants(newPlants)
    
    navigation.goBack()
  }

  return (
    <>
      <Header 
        title='Editar local'
        hasGoBack
      />
      <Container>
        <InputView>
          <Input
            label="Cidade"
            placeholder="Ex: Campina Grande"
            value={city}
            onChangeText={text => setCity(text)}
          />
          <Input 
            label="Estado"
            placeholder="Ex: PB"
            value={state}
            onChangeText={text => setState(text)}
            autoCapitalize='characters'
          />
        </InputView>

        <CheckButton onPress={handleEditFolder}>
          <ButtonText>Concluir edição</ButtonText>
        </CheckButton>
      </Container>
    </>
  )
}

export default EditFolder;