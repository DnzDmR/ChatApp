package com.service.chatroom.services;

import com.service.chatroom.entity.Group;
import com.service.chatroom.entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Override
    public boolean createUser(User user) {
        return false;
    }

    @Override
    public boolean updateUser(User user) {
        return false;
    }

    @Override
    public boolean deleteUserByUsername(String username) {
        return false;
    }

    @Override
    public User getUserByUsername(String username) {
        return null;
    }

    @Override
    public List<User> getAllUsers() {
        return null;
    }

    @Override
    public List<User> getOnlineUsers() {
        return null;
    }

    @Override
    public List<Group> getUserGroupByUsername(String username) {
        return null;
    }

    @Override
    public boolean isOnlineByUsername(String username) {
        return false;
    }
}
