import React from "react";

import Header from "../components/Header/Header"
import Section from "../components/Section/Section";
import ContentOne from "../components/ContentOne/ContentOne";
import ContentTwo from "../components/ContentTwo/ContentTwo";
import Footer from "../components/Footer/Footer";
import useSEO from "../hooks/useSEO";

const Landing = () => {

    useSEO({title: 'Home'});

    return(
        <>
            <Header />
            <Section />
            <ContentOne />
            <ContentTwo />
            <Footer />
        </>
    )
}

export default Landing;