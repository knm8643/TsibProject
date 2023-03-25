package com.trys.tsibproject.service;

import com.trys.tsibproject.dao.BoardDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BoardService {

    @Autowired
    private BoardDAO boardDAO;

    // PostPage save
    public int savePost(String title, String media, String tag, String content){
        return boardDAO.savePost(title, media, tag, content);
    }
}
