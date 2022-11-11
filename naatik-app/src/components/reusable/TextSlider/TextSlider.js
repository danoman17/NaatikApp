import React from 'react'
import './TextSlider.css'

import { Button, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

const TextSlider = ( Baja, Media, Alta  ) => {
  return (


      <Tabs variant='unstyled' boxShadow='2xl' p='3' rounded='md' bg='white' w='80%' h='80%' overflow='scroll'>

        <TabList>
          <Tab _selected={{ color: 'white', bg: '#70AE47' }}>Bajo</Tab>
          <Tab _selected={{ color: 'white', bg: '#EE7D30' }}>Medio</Tab>
          <Tab _selected={{ color: 'white', bg: '#982B52' }}>Alto</Tab>
        </TabList>

            <TabPanels>

                  <TabPanel>
                  <p>Resumen de Bajo (Falta aplicar css)</p>
                  <Button colorScheme='green' >Siguiente</Button>
                  </TabPanel>

                  <TabPanel>
                  <p>Resumen de Medio (Falta aplicar css)</p>
                  <Button colorScheme='orange'>Siguiente</Button>
                  </TabPanel>

                  <TabPanel>
                  <p>Resumen de Alto (Falta aplicar css)</p>
                  <Button colorScheme='red'>Siguiente</Button>
                  </TabPanel>
                  
            </TabPanels>
      </Tabs>
  )
}

export default TextSlider