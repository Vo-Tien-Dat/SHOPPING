import { useSelector } from "react-redux";


function Contact(){
    const products = useSelector(state => state);
    console.log(products);
    return(
        <h1> contact</h1>
    )
}

export default Contact;