import React, { useState } from "react";
import Navbar from "./Components/Raghav/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ProductCard from "./Components/Raghav/ProductCard";
import JoinUs from "./Components/Chatur/JoinUs"
import Login from "./Components/Chatur/Login";
import Avatar from "./Components/Chatur/Avatar";
import ProfileSettings from "./Components/Chatur/ProfileSettings";
import Verify from "./Components/Chatur/Verify";
import ConfirmationModal from "./Components/Chatur/ConfirmationModal";
import Admin from "./Components/Chatur/Admin";
import MintNft from "./Components/Chatur/MintNft";
import Dashboard from "./Pages/Dashboard";
import CreateCategory from "./Components/Chatur/CreateCategory";

const App = () => {
  return (
    	// <div className="flex flex-col h-screen justify-center items-center border-indigo-100">
        //     {/* <Navbar/> */}
        //     {/* <Avatar size={30}/> */}
        //     {/* <JoinUs/> */}
        //     {/* <Login/> */}
        //     {/* <ProfileSettings name={'Ctrl Alt Elite'}/> */}
        //     {/* <Verify/> */}
        //     {/* <ConfirmationModal warning={'continue living'}/> */}
        //     {/* <Admin/> */}
        //     {/* <MintNft/> */}
        // </div>);
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<ProductCard />} />
            <Route path="/verify" element={<Verify/>}/>
            <Route path="/profile-settings" element={<ProfileSettings/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/join-us" element={<JoinUs/>}/>
            <Route path="/mint-nft" element={<MintNft/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/create-category" element={<CreateCategory/>}/>

          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;

