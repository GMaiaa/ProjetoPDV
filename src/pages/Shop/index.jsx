import React from "react";
import Main from "../../components/main";


const Shop =  () => {
    return(
        <div>
            <Main page = {1} >
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Código</th>
                            <th>Qtde</th>
                            <th>Vl. Unid</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    
                </table>
            </Main>
        </div>
    )
}

export default Shop