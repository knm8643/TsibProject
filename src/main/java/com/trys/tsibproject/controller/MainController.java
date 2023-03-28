package com.trys.tsibproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.trys.tsibproject.service.MainService;
import com.trys.tsibproject.dto.BoardDTO;

@Controller
@RequestMapping("/main")
@CrossOrigin("*")
public class MainController {
    @Autowired
    private MainService mainService;

    @GetMapping("/load-entire-post")
    @ResponseBody
    public List<BoardDTO> loadEntirePost() {
        return mainService.loadEntirePosts();
    }
}
