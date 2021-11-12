import React from "react";
import '../assets/css/app.css';
import Navbar from "./Navbar"
import Topbar from "./Topbar";
import ContentRow from "./ContentRow";
import Footer from "./Footer";

function App() {
    return (
        
        <div id="wrapper">
        <Navbar />
        <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
        <Topbar />
        <ContentRow />
        </div>
        <Footer />
        </div>
        </div>
    )
}
export default App;