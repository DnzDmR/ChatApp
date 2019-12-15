package com.service.chatroom.socket;

import com.service.chatroom.socket.WebSocketHandleTextMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import java.util.concurrent.CopyOnWriteArrayList;

@Configuration
@EnableWebSocket
public class WebSocketChat implements WebSocketConfigurer {

    @Autowired
    private WebSocketHandleTextMessage webSocketHandleTextMessage;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        System.out.println("#####- WebsocketCHAT");
        registry.addHandler(webSocketHandleTextMessage, "/socket/ws").setAllowedOrigins("*");
    }
}

