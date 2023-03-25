package com.trys.tsibproject.dao;

import com.trys.tsibproject.dto.MainDTO;
import com.trys.tsibproject.mapper.mainMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MainDAO {
    @Autowired
    private mainMapper mainMapper;

    public MainDTO loadPost() {
        return mainMapper.loadPostMapper();
    }
}
