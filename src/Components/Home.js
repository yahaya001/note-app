import React from 'react'
import Header from './Header';
import SearchBar from './SearchBar';
import NoteList from './NoteList';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function Home() {
  return (
    <div className='home'>
        <div>
     <Header></Header>
     <SearchBar/>
     <NoteList/>
     <Footer/>
     <Outlet></Outlet>
        </div>
    </div>
  )
}

export default Home;
