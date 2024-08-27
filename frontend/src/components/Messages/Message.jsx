import React from "react";
import img from "../../images/pic.png";
import { useSelector } from "react-redux";
import { Time } from "../../utils/Time";

const Message = ({ message }) => {
  const { selectedConversation } = useSelector((state) => state.conversation);
  // const { profilePic } = useSelector((state) => state.user);
  // console.log(selectedConversation);
  const { _id } = useSelector((state) => state.user);
  // console.log(profilePic);
  const fromMe = message.senderId === _id;
  const formattedTime = Time(message.createdAt);
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  // const profile = fromMe ? profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";

  // const shakeClass = message.shouldShake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={img} />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>
        {message.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {formattedTime}
      </div>
    </div>
  );
};

export default Message;
