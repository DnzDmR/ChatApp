package com.service.chatroom.socket;

import com.google.gson.Gson;
import com.service.chatroom.entity.Message;
import com.service.chatroom.services.MessageService;
import org.json.JSONObject;
import org.springframework.beans.factory.ObjectProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class WebSocketHandleTextMessage extends TextWebSocketHandler {

    @Autowired
    MessageService messageService;

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {


        JSONObject obj = new JSONObject(message.getPayload());

        for(WebSocketSession s : sessions) {
            s.sendMessage(new TextMessage(obj.toString()));
        }
    }


    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);

    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {
        sessions.remove(session);
        session.close();

    }

}
