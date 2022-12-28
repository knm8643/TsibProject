package com.trys.tsibproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/springTestController")
public class HomeController {

    @PostMapping("/test")
    public String Home(@RequestParam(value="userMessage",required = false) String userMessage){
        System.out.println("Hello World! : " + userMessage);
        return "springTest";
    }
}
