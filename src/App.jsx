import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button, Card, Flex } from 'antd'
import icone from "./assets/icone.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faHouseChimneyMedical } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

function App() {

  return (
    <main className='main'>
      <Flex vertical={true} align={"center"} justify={"center"} style={{width:"100%", height:"100%"}}>
        <Card style={{backgroundColor:"transparent", border:"none",height:"70vh", width:"80vw"}} >
          <Flex vertical={true} align={"center"}>
            <img src={icone} height="100" />
            <h2 className={'titulo'}>Bola de Pelo Sapiranga</h2>
            <Button className='botao' onClick={() =>{window.location.href = `https://wa.me/8597833091?text=Olá%20boa%20tarde,%20queria%20saber%20mais%20informações`; }}>
              <Flex vertical={false} align={"center"} justify={"flex-start"} gap={20}>
              <FontAwesomeIcon icon={faHouseChimneyMedical} size={"xl"} />
              <p className="texto">Faça uma Doação</p>
              </Flex>
            </Button>
            <Button  className='botao'  onClick={() =>{window.location.href = `https://landing-page-bola-de-pelo-cscg926vx-samunogues-projects.vercel.app`; }}>
              <Flex vertical={false} align={"center"} justify={"flex-start"} gap={20}>
              <FontAwesomeIcon icon={faGlobe} size={"xl"} />
              <p className="texto">Nosso Site</p>
              </Flex>
            </Button>
            <Button className='botao' onClick={() =>{window.location.href = `https://wa.me/8597833091?text=Olá%20boa%20tarde,%20queria%20saber%20mais%20informações`; }} >
              <Flex vertical={false} align={"center"} justify={"flex-start"} gap={20}>
              <FontAwesomeIcon icon={faWhatsapp} size={"xl"} color='#00AB3A' />
              <p className="texto">Whatsapp</p>
              </Flex>
            </Button>
            <Button className='botao' onClick={() =>{window.location.href = `https://wa.me/8597833091?text=Olá%20boa%20tarde,%20queria%20saber%20mais%20informações`; }}>
              <Flex vertical={false} align={"center"} justify={"flex-start"} gap={20}>
              <FontAwesomeIcon icon={faHeart} size={"xl"} color='red' />
              <p className="texto">Seja um Doador</p>
              </Flex>
            </Button>
          </Flex>
        </Card>
      </Flex>
    </main>
  )
}

export default App
