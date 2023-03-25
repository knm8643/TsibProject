package com.trys.tsibproject.controller;

import com.trys.tsibproject.dao.MainDAO;
import com.trys.tsibproject.service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


@Controller
@RequestMapping("/main")
@CrossOrigin("*")
public class MainController {
    @Autowired
    private MainService mainService;

    @Autowired
    private MainDAO mainDAO;

    @GetMapping("/load-post")
    @ResponseBody
    public MainService loadPost() {
        System.out.println(mainService);
        return mainService;
    }
}
