import { useState } from "react";
import ModalComponent from "./modalComponents/ModalComponent";

const GlobalClassmentComponent = ({
  globalClassment,
  localStoreScores,
  sortedArray,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ModalComponent
        openModal={openModal}
        setOpenModal={setOpenModal}
        sortedArray={sortedArray}
        globalClassment={globalClassment}
        localStoreScores={localStoreScores}
      />
    </>
  );
};

export default GlobalClassmentComponent;
