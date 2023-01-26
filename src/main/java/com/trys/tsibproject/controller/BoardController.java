package com.trys.tsibproject.controller;

import com.trys.tsibproject.dao.BoardDAO;
import com.trys.tsibproject.dto.BoardDTO;
import com.trys.tsibproject.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardDAO dao;

    @PostMapping("/inputBoard")
    @ResponseBody
    public int inputBoard(String userName){
        if(userName == null && userName.equals("")){
            return 01;
        } else {
            boardService.boardInsert(userName);
        }
        return 02;
    }

    @GetMapping("/selectBoard")
    @ResponseBody
    public int selectBoard(String sendData){
        System.out.println("-- 메인페이지 진입 성공 --");
        return 01;
    }

    @PostMapping("/create")
    @ResponseBody
    public int postTitle(@RequestBody BoardDTO data){
        String title = data.getTitle();
        String media = data.getMedia();
        String tag = data.getTag();
        String content = data.getContent();
        System.out.println(title);
        System.out.println(media);
        System.out.println(tag);
        System.out.println(content);
        return 01;
    }
}
