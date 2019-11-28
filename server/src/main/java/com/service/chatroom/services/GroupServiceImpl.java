package com.service.chatroom.services;

import com.service.chatroom.entity.Group;
import org.springframework.stereotype.Service;

@Service
public class GroupServiceImpl implements GroupService {
    @Override
    public boolean createGroup(Group group) {
        return false;
    }

    @Override
    public boolean updateGroup(Group group) {
        return false;
    }

    @Override
    public boolean deleteGroupByName(String name) {
        return false;
    }

    @Override
    public Group getGroupByName(String name) {
        return null;
    }
}
