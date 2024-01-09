import { useState } from 'react'

import './App.css'

function App() {
  const [inputValues, setInputValues] = useState({

  });


  const [preciosEnergiaMes, setConsumoPreciosEnergiaMes] = useState([0,0,0,0,0,0,0]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Actualizar el estado con el nuevo valor del input
    setInputValues({
      ...inputValues,
      [name]: value*1,
    });
  };


  

  return (
    <>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>FRANJA</th>
              <th>CONSUMO ANUAL (kWh)</th>
              <th>CONSUMO FACTURA ACTUAL (kWh)</th>
              <th>PRECIOS ENERGIA ACTIVA MEDIA ANUAL (€/kWh)</th>
              <th>PRECIOS ENERGIA ACTIVA MES DE FACTURACION (€/kWh)</th>
              <th>Descuento</th>
              <th>PRECIO CON DESCUENTO</th>
              <th>TOTAL PAGO EN FACTURA</th>
              <th>TOTAL PAGO ANUAL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>P1</td>
              <td><input type="number" name="consumo_anual_p1" step="any"></input></td>
              <td><input type="number" name="consumo_factura_p1" step="any" value={inputValues.p1}
        onChange={handleInputChange}></input></td>
              <td><input type="number" name="precio_medio_anual_p1" step="any" ></input></td>
              <td><input type="number" name="precio_factura_p1" step="any"></input></td>
              <td><input type="number" name="descuento_p1" step="any"></input></td>
              <td><input type="number" name="precio_con_descuento_p1" step="any"></input></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>P2</td>
              <td><input type="number" name="consumo_anual_p2" step="any"></input></td>
              <td><input type="number" name="consumo_factura_p2" step="any" value={inputValues.p2}
        onChange={handleInputChange}></input></td>
              <td><input type="number" name="precio_medio_anual_p2" step="any"></input></td>
              <td><input type="number" name="precio_factura_p2" step="any"></input></td>
              <td><input type="number" name="descuento_p2" step="any"></input></td>
              <td><input type="number" name="precio_con_descuento_p2" step="any"></input></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>P3</td>
              <td><input type="number" name="consumo_anual_p3" step="any"></input></td>
              <td><input type="number" name="consumo_factura_p3" step="any"value={inputValues.p3}
        onChange={handleInputChange}></input></td>
              <td><input type="number" name="precio_medio_anual_p3" step="any"></input></td>
              <td><input type="number" name="precio_factura_p3" step="any"></input></td>
              <td><input type="number" name="descuento_p3" step="any"></input></td>
              <td><input type="number" name="precio_con_descuento_p3" step="any"></input></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>P4</td>
              <td><input type="number" name="consumo_anual_p4" step="any"></input></td>
              <td><input type="number" name="consumo_factura_p4" step="any" value={inputValues.p4}
        onChange={handleInputChange}></input></td>
              <td><input type="number" name="precio_medio_anual_p4" step="any"></input></td>
              <td><input type="number" name="precio_factura_p4" step="any"></input></td>
              <td><input type="number" name="descuento_p4" step="any"></input></td>
              <td><input type="number" name="precio_con_descuento_p4" step="any"></input></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>P5</td>
              <td><input type="number" name="consumo_anual_p5" step="any"></input></td>
              <td><input type="number" name="consumo_factura_p5" step="any" value={inputValues.p5}
        onChange={handleInputChange}></input></td>
              <td><input type="number" name="precio_medio_anual_p5" step="any"></input></td>
              <td><input type="number" name="precio_factura_p5" step="any"></input></td>
              <td><input type="number" name="descuento_p5" step="any"></input></td>
              <td><input type="number" name="precio_con_descuento_p5" step="any"></input></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>P6</td>
              <td><input type="number" name="consumo_anual_p6" step="any"></input></td>
              <td><input type="number" name="consumo_factura_p6" step="any" value={inputValues.p6}
        onChange={handleInputChange}></input></td>
              <td><input type="number" name="precio_medio_anual_p6" step="any"></input></td>
              <td><input type="number" name="precio_factura_p6" step="any"></input></td>
              <td><input type="number" name="descuento_p6" step="any"></input></td>
              <td><input type="number" name="precio_con_descuento_p6" step="any"></input></td>
              <td></td>
              <td></td>
            </tr>
           
          </tbody>
        </table>
      </div>
   
    </>
  )
}

export default App
