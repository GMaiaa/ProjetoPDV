import React, { useEffect, useState } from "react";
import Main from "../../components/main";
import { AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai";
import { FaPlus, FaTrash } from "react-icons/fa";
import { BsFilterLeft, BsFillPencilFill } from "react-icons/bs";
import { firebase } from "../../firebase";
import {
  collection,
  getDocs,
  addDoc,
  setDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import Modal from "../../components/modal";
import "./index.css";

const Stock = () => {
  const [items, setItems] = useState([]);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [docId, setDocId] = useState("");
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [value, setValue] = useState(0);

  const clearData = () => {
    setName("");
    setId("");
    setValue(0);
    setDocId("");
  };

  const addItem = async () => {
    try {
      await addDoc(collection(firebase, "produtos"), {
        id: id,
        name: name,
        value: value,
      });
    } catch (error) {
      console.log(error);
    }
    setOpenModalAdd(false);
    clearData();
    await getItems();
  };

  const deleteItem = async () => {
    try {
      await deleteDoc(doc(firebase, "produtos", docId));
    } catch (error) {
      console.log(error);
    }
    setOpenModalDelete(false);
    clearData();
    await getItems();
  };

  const updateItem = async () => {
    try {
      await setDoc(doc(firebase, "produtos", docId), {
        id: id,
        name: name,
        value: value,
      });
    } catch (error) {
      console.log(error);
    }
    setOpenModalUpdate(false);
    clearData();
    await getItems();
  };
  const getItems = async () => {
    try {
      const data = await getDocs(collection(firebase, "produtos"));
      const arrayData = data.docs.map((doc) => ({
        docId: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      console.log(arrayData);
      setItems(arrayData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getItems();
  }, []);

  return (
    <div>
      <Main page={0}>
        <div className="contentStock">
          <div className="commands">
            <button
              onClick={() => setOpenModalAdd(true)}
              className="plusButton"
            >
              <FaPlus className="iconPlus" />
            </button>
            <div className="rowTableTop">
              <div className="wrapper">
                {/* <AiOutlineSearch className="iconSearch" /> */}
                <input
                  className="search"
                  type="text"
                  placeholder="Busca Rápida"
                />
              </div>
              <button className="filterButton">
                <BsFilterLeft /> Filtrar
              </button>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>
                  Código <AiOutlineArrowUp />
                </th>
                <th> Nome </th>
                <th> Preço de venda </th>
              </tr>
            </thead>
            <tbody>
              {items.map((i) => (
                <tr key={i.docId}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.value}</td>
                  <td>
                    <button
                      onClick={() => {
                        setName(i.name);
                        setId(i.id);
                        setValue(i.value);
                        setDocId(i.docId);
                        setOpenModalUpdate(true);
                      }}
                    >
                      <BsFillPencilFill id="iconUpdate" />
                    </button>
                    <button
                      onClick={() => {
                        setDocId(i.docId);
                        setOpenModalDelete(true);
                      }}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          className="AddProduct"
          isOpen={openModalAdd}
          setModalOpen={() => setOpenModalAdd(!openModalAdd)}
        >
          <label htmlFor="name">Nome do produto</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div className="labelDown">
            <div className="labelId">
              <label htmlFor="id">Código do produto</label>
              <input
                type="text"
                name="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </div>
            <div className="labelValue">
              <label htmlFor="value">Preço</label>
              <input
                type="number"
                name="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
          </div>
          <button onClick={addItem} className="addButton">
            
            Adicionar Produto
          </button>
        </Modal>
        <Modal
          className="AddProduct"
          isOpen={openModalUpdate}
          setModalOpen={() => setOpenModalUpdate(!openModalUpdate)}
        >
          <label htmlFor="name">Nome do produto</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <div className="labelDown">
            <div className="labelId">
              <label htmlFor="id">Código do produto</label>
              <input
                type="text"
                name="id"
                value={id}
                onChange={(event) => setId(event.target.value)}
              />
            </div>
            <div className="labelValue">
              <label htmlFor="value">Preço</label>
              <input
                type="number"
                name="value"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
          </div>
          <button onClick={updateItem} className="addButton">
            
            Atualizar produto
          </button>
        </Modal>
        <Modal
          isOpen={openModalDelete}
          setModalOpen={() => setOpenModalDelete(!openModalDelete)}
        >
          <div className="removeProduct">
          <p>Confirma a remoção desse produto?</p>
          
          <div className="confirmButtons">
            <button className="confirmButton" onClick={deleteItem}> Confirmar </button>
            <button className="cancelButton"> Cancelar </button>
          </div>
          </div>
        </Modal>
      </Main>
    </div>
  );
};

export default Stock;
