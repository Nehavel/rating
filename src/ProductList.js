import { useState } from 'react';
import './Product.css'

export default function Productlist() {
  const  [inStock, setInStock]= useState(false);
  const [searchKey, setSearchKey] = useState('');
    const PRODUCTS = [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];

    
      //search & filter
      function SearchBar() {
        return (
          <form className='form'>
            <input type="text" placeholder="Search..." value={searchKey} onChange={(e) => onSearchKeyChange(e.target.value)} />
            <label style={{display: 'block'}}>
              <input type="checkbox" checked={inStock} onChange={showProducts} />
              {' '}Only show products in stock {inStock}
            </label>
          </form>
        );
      }
      function onSearchKeyChange(value){
        setSearchKey(value)
      }
      function showProducts(){
        setInStock(!inStock);
      }
      // table
            // column name, head, rows
        function ProductRow({item, inStock}){
                if(item.name.toLowerCase().includes(searchKey.toLowerCase())){

                
                let stock =  <tr key={item.name} className={!item.stocked ? 'not-stocked' : null}>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.price}
                </td>
            </tr>;
        
            return(
                <>
                {(inStock && item?.stocked) || !inStock ? stock : null}
                </>
            
           );
            } else return;
        
        }
        let rows = PRODUCTS.map((item,i) => {   
            return( <>
            {((item?.category !== PRODUCTS[i-1]?.category) || i === 0 ) ?  <tr key={item.category} className="category">
            <th colSpan={2}>
            {item.category}
            </th>
            </tr> : null}

            <ProductRow inStock={inStock} item={item}/>
            
            </>)
            
        })
      return(
        <>
        <SearchBar/>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
        </>
       
      );



    }         

