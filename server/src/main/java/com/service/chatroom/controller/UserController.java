package com.service.chatroom.controller;

import com.service.chatroom.entity.Users;
import com.service.chatroom.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;


    @RequestMapping(value = "/register",method = RequestMethod.POST)
    public ResponseEntity postUserRegister(@RequestBody Users user){

        user.setPassword(passwordEncoder.encode(user.getPassword()));

        boolean status = userService.createUser(user);

        if(status){
            return new ResponseEntity(HttpStatus.OK);}
        else {
            return new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

    }


    @RequestMapping(value = "/update",method = RequestMethod.POST)
    public ResponseEntity postUserUpdate(@RequestBody Users user){

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
