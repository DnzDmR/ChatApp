import decode from 'jwt-decode';

export default class LoginController {

    static async userLogin(username,password){
        
        const url = `http://localhost:9090/api/authenticate?username=${username}&password=${password}`;

        await fetch(url,{
            method: "GET",
        }).then(response => response.json()).then(data =>{
            console.log(data);
            sessionStorage.setItem("token",data.token);
        }).catch(err => console.log(err));
        
        
    }

    //check token
    static isExpired(){
        var isExpired = false;
        const token = sessionStorage.getItem('token');
        if(token != null){
            var decodedToken=decode(token, {complete: true});
            var dateNow = new Date();

            if(decodedToken.exp < dateNow.getTime())
                isExpired = true;
        }
        return isExpired;
    }


}
