package com.trys.tsibproject.controller;

import com.trys.tsibproject.dao.BoardDAO;
import com.trys.tsibproject.dto.BoardDTO;
import com.trys.tsibproject.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

// PostPage Controller
@Controller
@RequestMapping("/board")
@CrossOrigin("*")
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

    // Save
    @PostMapping("/write")
    @ResponseBody
    public String savePost(String title, String media, String tag, String content){
        BoardDTO boardDTO = new BoardDTO();

        boardDTO.setTitle(title);
        boardDTO.setMedia(media);
        boardDTO.setTag(tag);
        boardDTO.setContent(content);

        String title_test = boardDTO.getTitle();
        String media_test = boardDTO.getMedia();
        String tag_test = boardDTO.getTag();
        String content_test = boardDTO.getContent();

        boardService.savePost(title_test, media_test, tag_test, content_test);

        return "저장되었습니다.";
    }
}
