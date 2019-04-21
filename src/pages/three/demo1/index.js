import {MiddleComponent,React} from '../../../utils/MiddleComponent'


export class demo1 extends MiddleComponent {
	constructor(props){
		super(props);
	}
  render() {
    return (
       <iframe title="loader" frameBorder="no" src="/loadjson.html" id="webgl" style={{width:'100%',height:'100%'}}></iframe>
    );
  }
  componentDidMount() {

  }

  
}

  