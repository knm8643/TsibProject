package com.trys.tsibproject.dao;

import com.trys.tsibproject.mapper.springTestMapper;
import com.trys.tsibproject.mapper.boardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BoardDAO {

//    @Autowired
//    private springTestMapper testmapper;

    @Autowired
    private boardMapper boardTestMapper;

//    @Autowired
//    private springTestMapper postSaveMapper;

//    public int boardInsert(String userName){
//        return testmapper.insertTestMapper(userName);
//    }

    // PostPage save
    public int savePost(String title, String media, String tag, String content){
        return boardTestMapper.postSaveMapper(title, media, tag, content);
    }
}
