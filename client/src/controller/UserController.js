
export default class UserController {

    static async userRegister(user){

        const url = `http://localhost:9090/user/register`;

        await fetch(url,{
            method:"POST",
            body:JSON.stringify(user),
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => response.json()).then(data => console.log(data)).catch(err => console.log(err));


    }


}
