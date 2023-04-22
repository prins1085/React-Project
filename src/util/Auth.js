import { redirect } from "react-router-dom";

export function getAuthRole(){
    const loginData = JSON.parse(localStorage.getItem('login_data'));

    if(!loginData || loginData.role === null){
        return null;
    }
    return loginData.role;
}



export function checkRoleLoader(){
    const role = getAuthRole();

    if(!role){
        return redirect('/login');
    }
    return null;
}