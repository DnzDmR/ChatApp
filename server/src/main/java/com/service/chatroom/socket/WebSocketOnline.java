package com.service.chatroom.socket;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration
@EnableWebSocket
public class WebSocketOnline implements WebSocketConfigurer {

    @Autowired
    private WebSocketHandleTextMessageOnline webSocketHandleTextMessageOnline;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(webSocketHandleTextMessageOnline, "/socket/online").setAllowedOrigins("*");
    }
}

