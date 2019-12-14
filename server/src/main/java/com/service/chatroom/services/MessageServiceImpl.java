package com.service.chatroom.services;

import com.service.chatroom.entity.Message;
import com.service.chatroom.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MessageServiceImpl implements MessageService{

    @Autowired
    MessageRepository messageRepository;

    @Override
    public boolean createMessage(Message message) {

        messageRepository.save(message);
        return  false;
    }
}
