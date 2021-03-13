import React, { Component } from 'react'
import Listcard from './listcard'

class listpage extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             items : [
                 "niraj",
                 "rahul",
                 "pandey",
                 "engineer",
                 "react",
                 "angular"
             ],
             cards : [],
             search_text : ''
        }
    }
    
    componentDidMount(){
        let temp_items = []
        this.state.items.forEach((item)=>{
           // console.log(item)
                temp_items.push( 
                    <Listcard 
                    key={item} 
                    item={item}/>
                )
        });
        this.setState({
            cards : temp_items.slice()
        })
    }

    searchtextChangeHandler = (event) =>{
            this.setState({
                search_text : event.target.value
            },()=>{
                
            })
    }
    render() {
        return (
            <div>   
                <input 
                placeholder="Search for an item here" 
                onChange={this.searchtextChangeHandler} 
                value={this.state.search_text}>
                </input>
                    {this.state.cards}
            </div>
        )
    }
}

export default listpage
