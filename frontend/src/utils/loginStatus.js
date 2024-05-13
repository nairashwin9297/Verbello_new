
    export const loginStatus = async () => {
        let response;
        try {
          // Make a request to your server to check if the user is logged in
          response = await fetch(
            "http://localhost:2000/api/users/checkSession",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              credentials: "include",
            }
          );
         
          if (response.ok) {
            const data = await response.json();
            console.log(data,'Data')
            return data
          }
        } catch (error) {
          console.error("Error checking login status:", error);
        }
      };

export const handleLogout = async() =>{
  console.log('Logout attempted');
  window.sessionStorage.removeItem('userId');
  window.sessionStorage.removeItem('userFullName');

  console.log('Inside');
  let response;

  try {
    response = await fetch("http://localhost:2000/api/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: 'include',
    });
    window.location.href = "/";
  } catch (e) {
    console.error(e, 'ERR');
  }

  console.log(response, 'RES');
};
