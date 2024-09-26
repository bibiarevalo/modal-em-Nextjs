"use client"

import Image from "next/image";

import React, {useState} from "react";
import style from "./"

import Modal from './components/Modal'

export default function Home() {
  const [modalVisivel, setModalVisivel] = useState(false)



  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1>Hello Word</h1>

        <button onClick={()=> setModalVisivel(true)}>Open</button>

        {modalVisivel ? <Modal><h2>Modal</h2></Modal>: null}

      </main>

    </div>
  );
}
