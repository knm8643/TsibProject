package com.trys.tsibproject.dao;

import com.trys.tsibproject.mapper.springTestMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class BoardDAO {

    @Autowired
    private springTestMapper testmapper;

    public int boardInsert(String userName){
        return testmapper.insertTestMapper(userName);
    }
}
