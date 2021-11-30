import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

import '../styles/box.css';
import '../styles/display.css';

function ResourceList(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>
        <div class="container">
  
  <ul class="responsive-table">
    <li class="table-header">
      <div class="col col-1"><img src={props.details.url} alt="Resource Image" width="100px" height="120px"/> </div>
      <div class="col col-2"><h3>Resource Name: <Link to={`/resourceview/${props.details.ResourceCode}`}> {props.details.ResourceName}</Link></h3></div>
      <div class="col col-3">
      <div className="butto">
            </div>
        </div>
      </li>
      </ul>

      
    </div>


            

        </>
    )
}

export default ResourceList;