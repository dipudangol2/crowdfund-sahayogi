import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProjectDetail from './components/ProjectDetail'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './components/login'
import Signup from './components/signup'

const MyRoute = () => {
    const data = [
        {
            id: 1,
            imageurl: 'rafah.jpg',
            name: 'Fund For Gaza',
            cause: 'To provide families with access to basic necessities like food, clean water, and medical care. Join us in making a difference. It is also associated with people supporting ceasefire.',
        },
        {
            id: 2,
            imageurl: 'img2.jpeg',
            name: 'Plastic Waste Reduction Campaign',
            cause: 'Fund campaigns that aim to reduce plastic waste through education, advocacy, and community clean-up events.',
        },
        {
            id: 3,
            imageurl: 'img3.jpg',
            name: 'Sustainable Fashion Project',
            cause: 'Launch initiatives that promote sustainable fashion, such as clothing recycling programs or eco-friendly fashion lines.',
        },
        {
            id: 4,
            imageurl: 'img4.jpg',
            name: 'Green Technology Training Program',
            cause: 'Create training programs for green technology skills, like solar panel installation, electric vehicle maintenance.',
        },
        {
            id: 5,
            imageurl: 'img5.jpg',
            name: 'Waste-to-Energy Project',
            cause: 'Provide a sustainable energy source and reduce landfill waste. Develop projects that convert waste materials into energy, such as biogas plants or waste incineration facilities.',
        },
        {
            id: 6,
            imageurl: 'img6.jpg',
            name: 'Community Recycling Center',
            cause: 'Reduce waste, create local jobs, and educate the community about recycling and waste management.',
        },
    ];
    return (
        <Routes>
            <Route path='/' element={<>
                <Navbar />
                <Card data={data} />
                <Footer />
            </>
            } />
            <Route path="/login"
                element={
                    <>
                        <Navbar />
                        <Login />

                        <Footer />

                    </>
                } />
            <Route path='/signup' element={
                <>
                    <Navbar />
                    <Signup />
                    <Footer />
                </>
            } />
            <Route path='/donate/:id' element={<>
            <Navbar/>
            <ProjectDetail /></>} />
        </Routes>
    )
}

export default MyRoute