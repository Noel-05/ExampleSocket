package com.dga.pruebasocket.Controller;

import com.dga.pruebasocket.Model.ChatMessage;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.annotation.SendToUser;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
public class ChatController {

    @GetMapping("/")
    public ModelAndView home() {
        return new ModelAndView("index");
    }

    @GetMapping("/helloSocket")
    public ModelAndView index() {
        return new ModelAndView("prueba2");
    }

    @GetMapping("/anuncio")
    public ModelAndView anuncio() {
        return new ModelAndView("pruebaAnuncio");
    }

    //-----------------------------------------------------------------------------------------------

    @MessageMapping("/chat.newUser")
    @SendTo("/topic/public")
    public ChatMessage newUser(@Payload final ChatMessage chatMessage,
                               SimpMessageHeaderAccessor headerAccessor){
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }

    @MessageMapping("/chat.send")
    @SendTo("/topic/public")
    public ChatMessage sendMessage(@Payload final ChatMessage chatMessage){
        return chatMessage;
    }

    //-----------------------------------------------------------------------------------------------

    @MessageMapping("/change-notice")
    @SendTo("/topic/notice")
    public String greeting(@Payload String value) {
        return value;
    }
}
