import { useRouteError } from "react-router-dom";
export const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>OOPS!!</h1>
      <h2>Something went wrong!!</h2>
      <h3>Page not found</h3>
    </div>
  );
};
