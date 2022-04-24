package com.dga.pruebasocket.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketMessageConfig implements WebSocketMessageBrokerConfigurer {

    @Override
    public void registerStompEndpoints(final StompEndpointRegistry registry){
        // Para que el Cliente se pueda conectar a este socket
        registry.addEndpoint("/chat-example").setAllowedOriginPatterns("*").withSockJS();

        registry.addEndpoint("/socket").setAllowedOriginPatterns("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(final MessageBrokerRegistry registry){
        // Donde se hará la comunicación del Cliente al Servidor
        registry.setApplicationDestinationPrefixes("/app");
        // Donde se hará la comunicación del Servidor al Cliente
        registry.enableSimpleBroker("/topic");
    }
}