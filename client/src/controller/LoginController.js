
export default class UserController {

    static async userLogin(username,password){
        
        const url = `http://localhost:9090/api/authenticate?username=${username}&password=${password}`;

        await fetch(url,{
            method: "GET",
        }).then(response => response).then(response => console.log(response.headers.get('Authorization')));
        
        
    }


}
