import {MiddleComponent,React} from '../../utils/MiddleComponent';
import './index.css';


export class Input extends MiddleComponent {
	constructor(props){
		super(props);
	}
	render() {
	    return (
	    	<input value={this.props.value.value}  onChange={this.handleChange.bind(this,this.props.value.key)}></input>
	    );
	}


  
}

  