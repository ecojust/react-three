import {MiddleComponent,React} from '../../utils/MiddleComponent';
import './index.css';


export class Input extends MiddleComponent {
	constructor(props){
		super(props);
    	this.copyProps2State();
	}
	render() {
	    return (
	    	<div>
	    	<input value={this.state.value}  onChange={this.handleChange.bind(this)}></input>
	    	<span> { this.state.value } </span>
	    	</div>
	    );
	}
}

  