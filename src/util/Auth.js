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

export function checkCreateFormLoader(){
    const role = getAuthRole();

    if(!role){
        return redirect('/login');
    }
    if(role === "user"){
        return redirect('/');
    }
    return null;
}