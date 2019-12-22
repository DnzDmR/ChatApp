package com.service.chatroom.socket;

import com.google.gson.Gson;
import com.service.chatroom.entity.Users;
import com.service.chatroom.services.UserService;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.io.IOException;
import java.util.*;
import java.util.concurrent.CopyOnWriteArrayList;

@Component
public class WebSocketHandleTextMessageOnline extends TextWebSocketHandler {


    @Autowired
    UserService userService;

    List<WebSocketSession> sessions = new CopyOnWriteArrayList<>();

    HashMap<WebSocketSession,String> online = new HashMap<>();

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

        JSONObject obj = new JSONObject(message.getPayload());

        online.put(session,obj.getString("username"));

        String json = new Gson().toJson(getOnlineUsers());
        sendMessage(json);

    }


    @Override
    public void afterConnectionEstablished(WebSocketSession session) throws Exception {
        sessions.add(session);
        online.put(session,"");
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status) throws Exception {

        online.remove(session);
        sessions.remove(session);
        session.close();

        String json = new Gson().toJson(getOnlineUsers());
        sendMessage(json);

    }

    public void sendMessage (String obj) throws IOException {

        for(WebSocketSession s : sessions) {
            s.sendMessage(new TextMessage(obj));
        }
    }

    public List<Users>  getOnlineUsers(){

        List<Users> users  = new ArrayList<>();

        for(Map.Entry<WebSocketSession, String> entry : online.entrySet()) {

            String value = entry.getValue();

            Optional<Users> u = userService.getUserByUsername(value);

            if(u.isPresent()){
                users.add(u.get());
            }

        }

        return  users;

    }

}
