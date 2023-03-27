package com.trys.tsibproject.dao;

import com.trys.tsibproject.mapper.boardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BoardDAO {
    @Autowired
    private boardMapper boardMapper;

    // PostPage save
    public int savePost(String title, String media, String tag, String content){
        return boardMapper.savePostMapper(title, media, tag, content);
    }
}
