import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return <div>Oh, ada Error !!! {error.error.message} </div>;
}

export default ErrorPage;
