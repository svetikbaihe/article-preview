import React from "react";
import Popover from "@components/Popover";
import { IoMdShareAlt } from "react-icons/io";
import { LiaFacebookSquare } from "react-icons/lia";
import { RxTwitterLogo } from "react-icons/rx";
import { AiOutlinePinterest } from "react-icons/ai";
import Avatar from "@components/Avatar";
import "./App.scss";
import Button from "@elements/Button";

const App: React.FC = () => {
  return (
    // <Popover buttonIcon={IoMdShareAlt}>
    //   <div className="prose prose-sm prose-p:text-grayish-blue">
    //     <p>SHARE</p>
    //     <Button href="https://www.facebook.com" Icon={LiaFacebookSquare} />
    //     <Button href="https://www.twitter.com" Icon={RxTwitterLogo} />
    //     <Button href="https://www.pinterest.com" Icon={AiOutlinePinterest} />
    //   </div>
    // </Popover>
    <Avatar img='/images/avatar-michelle.jpg' name='Michelle Appleton' date="28 Jun 2020"/>
  );
};

export default App;
