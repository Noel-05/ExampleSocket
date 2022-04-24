package com.dga.pruebasocket.Model;

import lombok.*;

@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChatMessage {

    private MessageType type;

    private String content;

    private String sender;

    private String time;

}
