package com.service.chatroom.services;

import com.service.chatroom.entity.Group;
import com.service.chatroom.entity.User;

import java.util.List;

public interface UserService {

    public boolean createUser(User user);
    public boolean updateUser(User user);
    public boolean deleteUserByUsername(String username);
    public User getUserByUsername(String username);
    public List<User> getAllUsers();
    public List<User> getOnlineUsers();
    public List<Group> getUserGroupByUsername(String username);
    public boolean isOnlineByUsername(String username);
}
