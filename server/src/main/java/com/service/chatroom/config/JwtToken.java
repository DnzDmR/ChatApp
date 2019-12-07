package com.service.chatroom.config;

public class JwtToken {

    private String token;
    private Boolean status;

    public JwtToken(String token, Boolean status) {
        this.token = token;
        this.status = status;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }
}
