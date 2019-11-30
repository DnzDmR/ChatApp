package com.service.chatroom.services;

import com.service.chatroom.entity.Group;
import com.service.chatroom.entity.Users;

import java.util.List;
import java.util.Optional;

public interface UserService {

    public boolean createUser(Users user);
    public boolean updateUser(Users user);
    public boolean deleteUserByUsername(String username);
    public Optional<Users> getUserByUsername(String username);
    public List<Users> getAllUsers();
    public List<Users> getOnlineUsers();
    public List<Group> getUserGroupByUsername(String username);
    public boolean isOnlineByUsername(String username);
}
