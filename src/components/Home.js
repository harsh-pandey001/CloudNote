import Notes from "./Notes";

const Home = (props) => {
  const {showalert} = props;
  return (
    <>
      <Notes  showalert = {showalert}/>
    </>
  );
};

export default Home;
