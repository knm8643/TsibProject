package com.trys.tsibproject.controller;

import com.trys.tsibproject.dao.BoardDAO;
import com.trys.tsibproject.dto.BoardDTO;
import com.trys.tsibproject.service.BoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/board")
public class BoardController {

    @Autowired
    private BoardService boardService;

    @Autowired
    private BoardDAO dao;

    @PostMapping("/inputBoard")
    public String inputBoard(BoardDTO boardDTO){
        String TEST = boardDTO.getUserName();
        System.out.println(TEST);
        // 작업 다음에 할께 이해가 잘안가네 대신 해줘도 상관없엉 23-01-04
        // 하려고 했던 것 (한줄요약: 디비에 Insert값 던져보기)
        // 컨피크 매퍼 경로 지정 > 사용자 호출 > 컨트롤러 > 서비스 > DAO > mapper > 서버
//        boardService.boardInsert("TEST");
        return null;
    }
}
