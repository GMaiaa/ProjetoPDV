import React, { useEffect, useState } from "react";
import Main from "../../components/main";
import { AiOutlineArrowUp, AiOutlineSearch } from "react-icons/ai";
import { FaPlus, FaTrash } from "react-icons/fa";
import { BsFilterLeft, BsFillPencilFill } from "react-icons/bs";
import { firebase } from "../../firebase"
import { collection, getDocs } from "firebase/firestore"
import "./index.css";

const Stock = () => {
const [items, setItems] = useState([])
const getItems = async () => { 
  try {
    const data = await getDocs(collection(firebase, "produtos"))
    const arrayData = data.docs.map(doc => ({hash: doc.id, ...doc.data()}))
    console.log(data)
    console.log(arrayData)
   setItems(arrayData)
  } catch (error) {
    console.log(error)
  }
}  
 useEffect(() => {
  getItems()
 }, [])
  return (
    <div>
      <Main>
        <div className="contentStock">
          <div className="commands">
            <button className="plusButton">
              <FaPlus className="iconPlus" />
            </button>
            <div className="rowTableTop">
              <div className="wrapper">
                <AiOutlineSearch className="iconSearch" />
                <input
                  className="search"
                  type="text"
                  placeholder="Busca Rápida"
                />
              </div>
              <button>
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
                <tr key={i.hash}>
                  <td>{i.id}</td>
                  <td>{i.name}</td>
                  <td>{i.value}</td>
                  <td><BsFillPencilFill/> <FaTrash/></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Main>
    </div>
  );
};

export default Stock;
