import React, { useContext, useEffect, useState } from 'react'
import './ProfileUpdate.css'
import assets from '../../assets/assets'
import { onAuthStateChanged } from 'firebase/auth';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../../config/firebase';
import { toast } from 'react-toastify';
import upload from '../../lib/upload.js';
import { AppContext } from '../../context/AppContext.jsx';
const ProfileUpdate = () => {
    const navigate=useNavigate();
    const [image,setImage] = useState(null);
    const [name,setName]= useState("");
    const [bio,setBio]= useState("");
    const [uid,setUid] =useState("");
    const [prevImage,setPrevImage] =useState("");
    const {setUserData} = useContext(AppContext);
    // const profileUpdate = async (e) => {
    //     e.preventDefault();
    //     try {
    //         if(!prevImage && !image){
    //             toast.error("Upload profile image");
    //             return;
    //         }
    //         const docRef = doc(db,"users",uid);
    //         // console.log(uid);
    //         if(image){
    //             const imgUrl = await upload(image);
    //             console.log(imgUrl);
    //             setPrevImage(imgUrl);
    //             await updateDoc(docRef,{
    //                 avatar:imgUrl,
    //                 bio:bio,
    //                 name:name,
    //             })
    //         }
    //         else{
    //             await updateDoc(docRef,{
    //                 bio:bio,
    //                 name:name,
    //             })
    //         }
    //         toast.success("Profile updated successfully!");
    //     } catch (error) {
    //     }
    // } 
    const profileUpdate = async (e) => {
        e.preventDefault();
        try {
            if(!prevImage && !image){
                toast.error("Upload profile image");
                return;
            }
            const docRef = doc(db,"users",uid);
            if(image){
                const imgUrl = await upload(image);
                setPrevImage(imgUrl);
                await updateDoc(docRef, {
                    avatar: imgUrl,
                    bio: bio,
                    name: name,
                });
            } else {
                await updateDoc(docRef, {
                    bio: bio,
                    name: name,
                });
            }
            const snap = await getDoc(docRef);
            setUserData(snap.data());
            navigate('/chat')
            toast.success("Profile updated successfully!");
        } catch (error) {
            console.error(error);
            toast.error(error.message);
        }
    };
    

    useEffect(()=>{
        onAuthStateChanged(auth,async (user)=>{
            if(user){
                setUid(user.uid);
                const docRef = doc(db,"users",user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    const userData = docSnap.data();
                    if (userData.name) setName(userData.name);
                    if (userData.bio) setBio(userData.bio);
                    if (userData.avatar) setPrevImage(userData.avatar);
                }

            }
            else{
                navigate('/');
            }
        })
    },[])

  return (
    <div className='profile'>
        <div className="profile-container">
            <form onSubmit={profileUpdate}>
                <h3>Profile Details</h3>
                <label htmlFor="avatar">
                    <input onChange={(e)=>setImage(e.target.files[0])} type="file" accept='.png, .jpg, .jpeg' id="avatar" hidden/>
                    <img src={image ? URL.createObjectURL(image) : prevImage || assets.avatar_icon} alt="" />
                    upload profile image
                </label>
                <input onChange={(e)=> setName(e.target.value)} value={name} type="text" placeholder='Your name' required />
                <textarea onChange={(e)=> setBio(e.target.value)} type="text" value={bio} placeholder='Write profile bio' required></textarea>
                <button type='submit'>Save</button>
            </form>
            <img className='profile-pic' src={image? URL.createObjectURL(image): prevImage?prevImage:assets.logo_icon} alt="" />
        </div>
    </div>
  )
}

export default ProfileUpdate