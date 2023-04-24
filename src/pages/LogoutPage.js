import { redirect } from "react-router-dom";

export function action(){
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if(confirmLogout){

        localStorage.removeItem('login_data');
    }
    return redirect('/');

}