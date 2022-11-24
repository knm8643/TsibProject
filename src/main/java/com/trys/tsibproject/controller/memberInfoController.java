package com.trys.tsibproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/member")
public class memberInfoController {

    @PostMapping("/test")
    public String testMember(){
        System.out.println("테스트");
        return "hi";
    }
}
