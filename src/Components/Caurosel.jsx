import React from 'react';
import { Box, IconButton, Image, useBreakpointValue } from '@chakra-ui/react';
// import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import { useState } from 'react';

export default function Carousel() {
  // const [slider, setSlider] = React.useState<Slider | null>(null);
  const [start,setStart]=useState(0);
 
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  const changeStartRight=()=>{
    if(start!==cards.length){
      setStart(prev=>prev+1);
    }else{
      setStart(0)
    }
  }
  const changeStartLeft=()=>{
    if(start>0){
      setStart(prev=>prev-1);
    }else{
      setStart(cards.length);
    }
  }

  const cards = [
    'https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];

  return (
    <Box
      position={'relative'}
      height={'300px'}
      width={'80%'}
      m='auto'
      overflow={'hidden'}>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={changeStartLeft}>
        Left
      </IconButton>
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={changeStartRight}>
        Right
      </IconButton>
     
     <Box paddingLeft='9%' m='auto'>
     {cards?.filter((e,index)=>index===start).map((e)=>(
      <Image src={e}/>
     ))}
     </Box>
      
    </Box>
  );
}