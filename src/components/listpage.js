import React, { Component } from 'react'
import Listcard from './listcard'

class listpage extends Component {


    constructor(props) {
        super(props)
        this.state = {
             items : [
                 "Virat Kohli",
                 "Rohit Sharma",
                 "MS Dhoni",
                 "Ishant Sharma",
                 "MD. Shami",
                 "Hardik Pandya"
             ],
             cards : [],
             backup_list : [],
             search_text : '',
             isSorted : false,
             sortedText : 'Sort'
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
            cards : temp_items.slice(),
            backup_list : temp_items.slice()
        })
        
    }

    searchtextChangeHandler = (event) =>{
            this.setState({
                search_text : event.target.value
            },()=>{
                let temp_list = []
                temp_list = this.state.backup_list.filter((e)=>{
                    return e.props.item.toUpperCase().includes(event.target.value.toUpperCase());
                })

                    if(temp_list.length > -1){
                    this.setState({
                        cards : temp_list.slice()
                    })
                }
            })
    }

    sortList = () =>{
        
        if(this.state.isSorted === false){
            let temp_list = this.state.cards.slice()
            temp_list.sort((a,b)=>{
                let fa = a.props.item.toLowerCase();
                let fb = b.props.item.toLowerCase();
    
                if (fa < fb) 
                {
                     return -1;
                }
                if (fa > fb)
                {
                    return 1;
                }
                return 0;
            })
    
            this.setState({
                cards : temp_list.slice(),
                isSorted : true,
                sortedText : 'Un-Sort'
            })
        }
        else{
            this.setState({
                cards : this.state.backup_list.slice(),
                isSorted : false,
                sortedText : 'Sort'
            })
        }
      
    }
    render() {
        return (
            <div>   
                <input 
                placeholder="Search for an item here" 
                onChange={this.searchtextChangeHandler} 
                value={this.state.search_text}>
                </input>
                <button onClick={this.sortList}>{this.state.sortedText}</button>
                {this.state.cards.length === 0 
                ? <p>No Matching Result found</p> 
                : this.state.cards}
                    
            </div>
        )
    }
}

export default listpage
