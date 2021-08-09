package com.akgarg.amazonclone.entity;

@SuppressWarnings("unused")
public class ResponseObject {
    private String clientSecret;

    public ResponseObject(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    public String getClientSecret() {
        return clientSecret;
    }

    public void setClientSecret(String clientSecret) {
        this.clientSecret = clientSecret;
    }

    @Override
    public String toString() {
        return "ResponseObject{" +
                "clientSecret='" + clientSecret + '\'' +
                '}';
    }
}
