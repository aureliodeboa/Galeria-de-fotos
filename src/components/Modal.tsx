type Props = {
    image: string;
    closeModal: ()=>void;
}

export const Modal= ({image, closeModal }: Props) =>{
    return(
       <>
            <div onClick={closeModal} className="fixed  top-0 left-0 right-0 bottom-0 flex justify-center items-center" >
                    <img className="max-w-screen max-h-screen " src={`assets/images/${image}`} alt="imagem" />
            </div>
            <div onClick={closeModal} className="cursor-pointer fixed w-5 h-5 top-4 right-4">
                <img src="https://static.vecteezy.com/system/resources/previews/018/887/462/original/signs-close-icon-png.png" alt="" />
            </div>
       </>
    );
}