package com.service.chatroom.services;

import com.service.chatroom.entity.Group;

public interface GroupService {

    public boolean createGroup(Group group);
    public boolean updateGroup(Group group);
    public boolean deleteGroupByName(String name);
    public Group getGroupByName(String name);

 }
