
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

function EnquiryDisplay(props){
    const navigate = useNavigate();
    console.log(props)
    return(
        <>
            <div className="styl">
            <div className="box">
                <table>
                    <tr>
                        <td>
                        <h4>Enquiry ID: {props.details.id}</h4>
                        <h4>User ID (Enquirer) : {props.details.user_id}</h4>
                        <h4>Enquiry: {props.details.enquiry}</h4>
                        
                        
                        
                        </td>

                        
                    </tr>
                    </table>
            

            
            </div>


            <br/> <br/>
            </div>

        </>
    )
}

export default EnquiryDisplay;