package com.service.chatroom.controller;

import com.service.chatroom.entity.User;
import com.service.chatroom.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public ResponseEntity postUserRegister(@RequestBody User user){

        boolean status = userService.createUser(user);

        if(status){
            return new ResponseEntity(HttpStatus.OK);}
        else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }


    @RequestMapping(value = "/update",method = RequestMethod.POST)
    public ResponseEntity postUserUpdate(@RequestBody User user){

        boolean status = userService.updateUser(user);

        if(status){
            return new ResponseEntity(HttpStatus.OK);}
        else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }


    @RequestMapping(value = "/delete/{username}",method = RequestMethod.POST)
    public ResponseEntity postUserDelete(@PathVariable("username") String username){

        boolean status = userService.deleteUserByUsername(username);

        if(status){
            return new ResponseEntity(HttpStatus.OK);}
        else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }

}
