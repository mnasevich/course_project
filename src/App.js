import React from 'react';

 export class App extends React.Component  {

  constructor(props){
    super(props);
    this.state = {
      products: ['bread', 'eggs', 'meat', 'coffee', 'cheese', 'cookies']
    }
  }

  addProduct(e){

    e.preventDefault();
    const {products} = this.state;
    const newProduct = this.newProduct.value;
    const wasAddedRecently = products.includes(newProduct);

    if(wasAddedRecently){

      this.setState({
        notification: this.newProduct.value +' was added recently'
      })

    } else {

      newProduct !== '' && this.setState({
        products: [...this.state.products, newProduct],
        notification: newProduct + ' was added'
      })

    }
    this.addForm.reset();
  }

  deleteProduct(product){
    const newProducts = this.state.products.filter(addedProduct => {
      return addedProduct != product;
    })

    this.setState({
      products: [...newProducts],
      notification: product +' was deleted'
    })

    if(newProducts.length === 0){
      this.setState({
        notification: 'List is empty'
      })
    }
  }

  deleteAll(){
    this.setState({
      products: [],
      notification: 'List is empty'
    })
  }

 
  render (){
    const {products, notification} = this.state;
    return(
    <div> 
      <header>
        <h1>Shopping list</h1>
        <img src="/images/noun_shopping_3480546.png" />
      </header>
      <div className="main_part">
        <form ref={input => this.addForm = input} action="" className="form-inline" onSubmit={(e) => {this.addProduct(e)}}>
            <div className="input_field">
            <input type="text" className="input_line" ref={input => this.newProduct = input}/>
            <button type="submit" className="button_sub">Add</button>
            </div>
        </form>
        <div className="list">         
          <h2>Products</h2>
            {
            ( products.length === 0 || notification !== '' ) && <p className="empty_list">{notification}</p>
            }
            {
            products.map((product, index) => {
              return(
                 <div className="product" key={product}>
                   <div className="number" >{index+1}</div>   
                   <div className="name">{product}</div>                      
                   <div className="button_delete">
                    <button type="button" onClick={(e) => this.deleteProduct(product)} className="btn">Delete</button>
                   </div>                      
                 </div>
                  )
                })
            }
         </div>
         <div className="button_delete_all">
           <button type="button" onClick={(e) => this.deleteAll()} className="btn">Delete all</button>
        </div>
      </div>
    </div> 
    )
  }
}
