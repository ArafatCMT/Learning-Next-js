"use client"
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';
import { ClientSideFunction } from '@/utils/client-utils';


export default function ClientRoute(){
  const result = ClientSideFunction();
  const theme = useTheme();
  // console.log(theme)
  return(
    <>
      <h1 style={{color:theme.colors.secondary}}>Client Route Page</h1>
      <p>{result}</p>
    </>
  )
}