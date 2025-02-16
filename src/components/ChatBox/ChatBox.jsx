import React, { useContext, useEffect, useState } from 'react'
import './ChatBox.css'
import assets from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { arrayUnion, doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import upload from '../../lib/upload'
// import { send } from 'vite'

const ChatBox = () => {

    const { userData, messagesId, chatVisual,setChatVisual,chatUser, messages, setMessages } = useContext(AppContext);
    const [input, setInput] = useState("");

    const sendImage = async (e) => {
        try {
            const fileUrl = await upload(e.target.files[0]);

            if (fileUrl && messagesId) {
                await updateDoc(doc(db, 'messages', messagesId), {
                    messages: arrayUnion({
                        sId: userData.id,
                        image: fileUrl,
                        createdAt: new Date()
                    })
                })
                const userIDs = [chatUser.rId, userData.id];

                userIDs.forEach(async (id) => {
                    const userChatRef = doc(db, 'chats', id);
                    const userChatsSnapshot = await getDoc(userChatRef);

                    if (userChatsSnapshot.exists()) {
                        const userChatData = userChatsSnapshot.data();
                        const chatIndex = userChatData.chatsData.findIndex((c) => c.messageId === messagesId);
                        userChatData.chatsData[chatIndex].lastMessage = "image";
                        userChatData.chatsData[chatIndex].updateAt = Date.now();
                        if (userChatData.chatsData[chatIndex].rId === userData.id) {
                            userChatData.chatsData[chatIndex].messageSeen = false;
                        }
                        await updateDoc(userChatRef, {
                            chatsData: userChatData.chatsData
                        })
                    }
                })
            }

        } catch (error) {
            toast.error(error.message);
        }
    }
    const convertTimestamp = (timestamp) => {
        let date = timestamp.toDate();
        let hour = date.getHours();
        let minute = date.getMinutes().toString().padStart(2, '0'); // Ensures two digits for minutes

        if (hour === 0) {
            // Midnight case
            return `12:${minute} AM`;
        } else if (hour === 12) {
            // Noon case
            return `12:${minute} PM`;
        } else if (hour > 12) {
            // PM times
            return `${hour - 12}:${minute} PM`;
        } else {
            // AM times
            return `${hour}:${minute} AM`;
        }
    }


    useEffect(() => {
        if (messagesId) {
            const unSub = onSnapshot(doc(db, 'messages', messagesId), (res) => {
                setMessages(res.data().messages.reverse());
                console.log(res.data().messages.reverse());
            })
            return () => {
                unSub();
            }
        }
    }, [messagesId])
    //  For Sending the messages and storing in the DB
    const sendMessage = async () => {
        try {
            if (input && messagesId) {
                await updateDoc(doc(db, 'messages', messagesId), {
                    messages: arrayUnion({
                        sId: userData.id,
                        text: input,
                        createdAt: new Date()
                    })
                })
                // For Updating the last seen message
                const userIDs = [chatUser.rId, userData.id];

                userIDs.forEach(async (id) => {
                    const userChatRef = doc(db, 'chats', id);
                    const userChatsSnapshot = await getDoc(userChatRef);

                    if (userChatsSnapshot.exists()) {
                        const userChatData = userChatsSnapshot.data();
                        const chatIndex = userChatData.chatsData.findIndex((c) => c.messageId === messagesId);
                        userChatData.chatsData[chatIndex].lastMessage = input.slice(0, 30);
                        userChatData.chatsData[chatIndex].updateAt = Date.now();
                        if (userChatData.chatsData[chatIndex].rId === userData.id) {
                            userChatData.chatsData[chatIndex].messageSeen = false;
                        }
                        await updateDoc(userChatRef, {
                            chatsData: userChatData.chatsData
                        })
                    }
                })
            }
        } catch (error) {
            toast.error(error.message);
        }
        setInput("");
    }
    return chatUser ? (
        <div className={`chat-box ${chatVisual?"":"hidden"}`}>
            <div className="chat-user">
                <img src={chatUser.userData.avatar} alt="" />
                <p>{chatUser.userData.name} {Date.now() - chatUser?.userData.lastSeen <= 70000 ? <img className='dot' src={assets.green_dot} alt="" />:null}</p>
                <img src={assets.help_icon} className='help' alt="" />
                <img onClick={()=> setChatVisual(false)} src={assets.arrow_icon} className='arrow' alt="" />
            </div>

            <div className="chat-msg">
                {messages.map((msg, index) => {
                    return (<div key={index} className={msg.sId === userData.id ? "s-msg" : "r-msg"}>
                        {msg["image"]
                            ? <img className='msg-img' src={msg.image} alt='' />
                            : <p className="msg">{msg.text}</p>
                        }
                        <div>
                            <img src={msg.sid === userData.rId ? userData.avatar : chatUser.userData.avatar} alt="" />
                            <p> {convertTimestamp(msg.createdAt)}</p>
                        </div>
                    </div>)
                })}
            </div>
            <div className="chat-input">
                <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Send a message' />
                <input onChange={sendImage} type="file" id="image" accept='image/png, image/jpg' hidden />
                <label htmlFor="image">
                    <img src={assets.gallery_icon} alt="" />
                </label>
                <img onClick={sendMessage} src={assets.send_button} alt="" />
            </div>
        </div>
    )
        : <div className={`chat-welcome ${chatVisual?"":"hidden"}`}>
            <img src={assets.logo_icon} alt="" />
            <p>Chat anytime, anywhere</p>
        </div>
}

export default ChatBox