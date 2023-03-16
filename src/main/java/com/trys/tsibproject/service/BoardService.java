package com.trys.tsibproject.service;

import com.trys.tsibproject.dao.BoardDAO;
import com.trys.tsibproject.dto.BoardDTO;
import com.trys.tsibproject.mapper.springTestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class BoardService {

    @Autowired
    private BoardDAO boardDAO;

    public int boardInsert(String userName){
//        return boardDAO.boardInsert(userName);
        return 01; // (임시)
    }

    // PostPage save
    public int savePost(String title, String media, String tag, String content){
        return boardDAO.savePost(title, media, tag, content);
    }
}
