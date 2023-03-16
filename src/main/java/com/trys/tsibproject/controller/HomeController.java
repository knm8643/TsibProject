package com.trys.tsibproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/springTestController")
@CrossOrigin("*")
public class HomeController {

    @PostMapping("/test")
    public String Home(@RequestParam(value="userMessage",required = false) String userMessage){
        if(userMessage == null) userMessage = "당신은 취소를 눌렀습니다!";
        else if(userMessage.equals("")) userMessage = "당신은 아무말도 입력안했습니다!";
        System.out.println("Hello Spring! : " + userMessage);
        return "springTest";
    }
}
