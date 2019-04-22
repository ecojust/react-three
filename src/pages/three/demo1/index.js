import {MiddleComponent,React} from '../../../utils/MiddleComponent'

import { Input } from '../../../components/Input'


export class demo1 extends MiddleComponent {
	constructor(props){
		super(props);
    this.state = {
      model:{
        key:'model',
        value:'tom'
      }
    }
	}
  render() {
    return (
      <div>
        <Input value={ this.state.model } update={this.update}/>
        { this.state.model.value }
      </div>
       
    );
  }
  componentDidMount() {

  }

  
}

  