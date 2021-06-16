// import axios from "axios";
import { useEffect } from "react";
import Header from "./components/Header";
import Query from "./components/query";
import queryCors from "./components/queryWithCors";
import Section from "./components/Section";
// import Photo1 from "./Public/Image/students.jpg";

const App = () => {
  const APIList = "https://www.udemy.com/api-2.0/courses/";
  const APIClient = "gIJdINdl183ge1sMAIWh2aaCaDCyq50y3SXIW9sJ";
  const APISecret =
    "Ocxd4ix5nIfwn8GhnA96O74O4NaxmzCfxdxsJps9RPAFI3gDJvd5WXTzDixzixWwQxfyg3CuaP0rG6zmdzTqKHf2mC8qDZIJrGotNnUp4cxdBrNuZkY4ZLKFAEmW5bLZ";
  useEffect(() => {
    const query = Query(APIList);
    console.log("Query : ", query);
    const query2 = queryCors(APIList, APIClient, APISecret);
    console.log("Query : ", query2);
  }, []);
  return (
    <>
      <Header />
      <Section/>
    </>
  );
};
export default App;
