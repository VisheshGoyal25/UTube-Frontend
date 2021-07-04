import React from 'react';

class Searchbar extends React.Component {
    state = {
        term: ''
    };
    handleChange = (event) => {
        this.setState({
            term: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return (
            <div  style={{margin:"20px 15% 12px 15%",width:"50%"}}>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <input  onChange={this.handleChange} name='video-search' type="text" value={this.state.term} style={{width:"75%", height:"45px",fontFamily:'bold',fontSize:"26px"}} ></input>
                    
                    <button type="button" onClick={this.handleSubmit} style={{display:"inline", margin:"0px 0 0 0", background:"#6666ff", color:"white",width:"25%",maxWidth:'120px', height:"45px"}}>Search</button>
                    </div>
                    </form>
                    
                    
            </div>
        )
    }
}
export default Searchbar;