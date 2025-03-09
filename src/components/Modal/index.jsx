import React, { useState } from "react";
import Modal from 'react-modal';
import './style.css'
import Lottie from "react-lottie";

export default function ModalScreen({ titulo, txtButton, options,setModalOpen,modalOpen,funcao}) {



    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: '90%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '50%',
            height: '70%',
            padding: '15px'

        },
    };

    const closeModal = () => {
        setModalOpen(false)
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
        >
            <div className="containerModal">

            <button className="closeButton" onClick={closeModal}>
                    X
                </button>
                <h2
                    className="tittleModal"
                >{titulo}</h2>

                <Lottie
                    options={options}
                />
                <button
                onClick={funcao}
                    className="modalButton"
                >{txtButton}</button>
            </div>

        </Modal>
    )
}