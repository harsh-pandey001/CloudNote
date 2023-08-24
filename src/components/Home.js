import { useEffect } from "react";
import Notes from "./Notes";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Home = (props) => {
  const {showalert} = props;
  let history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')){
      <Notes  showalert = {showalert}/>
   }
    else{
     props.showalert("Please Login or SignUp first", "danger");
     history.push("/login")
    }
    // eslint-disable-next-line
  }, []);
  return (
    <>
    </>
  );
};

export default Home;
