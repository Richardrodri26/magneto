"use client";
import { useGeneral } from '@/stores';

export const GeneralModals = () => {
  const setModalStatus = useGeneral(s => s.setModalStatus);

  return (
    // <Modal>
    //   <DialogHeader showCloseIcon closeModal={() => setModalStatus(undefined)}>
    //     Prueba
    //   </DialogHeader>
    // </Modal>
    <></>
  );
};
