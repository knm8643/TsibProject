package com.trys.tsibproject.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {
    @RequestMapping
    public String home(Model model){
        return "home";
    }

    // home.html에서 쏘기 때문에 이쪽으로 정보 값이 던져짐
    // 후에 이쪽에서 분기점 나누면 될것같음
    // or 아예 form 형식이 아니라 ajax로 분기점 나눠서 던지면 될듯
    // 11-24 작업은 여기서 마무리
    @PostMapping("/member")
    public String testMember2(String privateName){
        System.out.println("테스트2");
        return privateName;
    }
}
