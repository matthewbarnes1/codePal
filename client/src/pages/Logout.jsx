import Auth from "../utils/auth";

function Logout() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  logout();
  return <div>i'm logging out</div>;
}
export default Logout;
