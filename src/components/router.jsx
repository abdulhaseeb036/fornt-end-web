import React from 'react';
import Header from './navbar/navbar';
import Home from './home/home'
import Service from './service/service'
import Package from './packages/package'
import About from './about/about'
import Contact from './contact/contact'
import { BrowserRouter, Routes, Route,} from 'react-router-dom';

function ReactRouter() {
    return (
        <div>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route exact path="/" element={<Home />}> </Route>
                    <Route path="service" element={<Service />} > </Route>
                    <Route path="package" element={<Package />}> </Route>
                    <Route path="about-us" element={<About />}> </Route>
                    <Route path="contact-us" element={<Contact />}> </Route>
                    <Route  path="*" element={"not found"}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;