import React from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { DcScreen } from '../components/dc/DcScreen';
import { HeroScreen } from '../components/hero/HeroScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Navbar } from '../components/ui/Navbar';


export const AppRouter = () => {
  return (
    <BrowserRouter>
        
      <Navbar />

      <Routes>
        <Route path="/" element={<MarvelScreen />} />
        <Route path="marvel" element={<MarvelScreen />} />
        <Route path="dc" element={<DcScreen />} />
        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:heroId" element={<HeroScreen />} />
        <Route path="/*" element={<MarvelScreen />} />
        {/*<Route path='/*'  element={ <DashboardRoutes /> }/> */}
        
      </Routes>
    </BrowserRouter>
 )
}
