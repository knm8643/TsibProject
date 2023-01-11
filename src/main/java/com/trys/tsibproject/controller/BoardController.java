package com.trys.tsibproject.controller;

import com.trys.tsibproject.dao.BoardDAO;
import com.trys.tsibproject.dto.BoardDTO;
import com.trys.tsibproject.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

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
}
