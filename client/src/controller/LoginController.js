
export default class UserController {

    static async userLogin(username,password){
        
        const url = `http://localhost:9090/api/authenticate?username=${username}&password=${password}`;

        await fetch(url,{
            method: "GET",
        }).then(response => response.json()).then(data =>{
            console.log(data);
            sessionStorage.setItem("token",data.token);
        }).catch(err => console.log(err));
        
        
    }


}
